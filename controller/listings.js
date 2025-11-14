const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync");
const axios = require("axios");

// Default fallback location (Odisha center)
const DEFAULT_COORDINATES = [85.0985, 20.9517]; // [lng, lat] for GeoJSON

async function geocodeListing(listing) {
  const fullAddress = `${listing.location}, ${listing.country}`;
  try {
    const geoResponse = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: fullAddress,
          format: "json",
          limit: 1,
          "accept-language": "en",
        },
        headers: {
          "User-Agent": "wanderstay-App-Geocoding",
        },
      }
    );

    if (geoResponse.data && geoResponse.data.length > 0) {
      const { lat, lon } = geoResponse.data[0];
      // GeoJSON stores coordinates as [longitude, latitude]
      listing.geometry = {
        type: "Point",
        coordinates: [parseFloat(lon), parseFloat(lat)],
      };
      console.log("Geocoding success:", fullAddress, lon, lat);
    } else {
      console.warn(
        "⚠️ Geocoding failed (Nominatim): No results found for",
        fullAddress
      );
      // Fallback to default coordinates
      listing.geometry = {
        type: "Point",
        coordinates: DEFAULT_COORDINATES,
      };
    }
  } catch (err) {
    console.error("Geocoding error:", err.message);
    // Fallback on network error
    listing.geometry = { type: "Point", coordinates: DEFAULT_COORDINATES };
  }
}

// INDEX ROUTE - Show All Listings

const escapeRegex = (input = "") =>
  input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

module.exports.index = async (req, res) => {
  const { category } = req.query;
  const searchTerm = (req.query.q || "").trim();
  const filter = {};

  if (category) {
    filter.category = category;
  }

  if (searchTerm) {
    const sanitizedSearch = escapeRegex(searchTerm);
    const regexQuery = new RegExp(sanitizedSearch, "i");
    filter.$or = [
      { title: regexQuery },
      { description: regexQuery },
      { location: regexQuery },
      { country: regexQuery },
    ];
  }

  const allListings = await Listing.find(filter);
  res.render("listings/index.ejs", {
    allListings,
    category,
    searchTerm,
    resultCount: allListings.length,
  });
};

// NEW LISTING FORM

module.exports.createNewListing = (req, res) => {
  res.render("listings/new.ejs");
};

// SHOW LISTING DETAILS

module.exports.showListingDetails = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist");
    return res.redirect("/listings");
  }

  const coordinates = listing.geometry?.coordinates;
  const isNumber = (value) => typeof value === "number" && !Number.isNaN(value);
  const isValidLat = (value) => isNumber(value) && Math.abs(value) <= 90;
  const isValidLng = (value) => isNumber(value) && Math.abs(value) <= 180;
  const needsFreshGeocode =
    !Array.isArray(coordinates) ||
    coordinates.length !== 2 ||
    !isValidLng(coordinates[0]) ||
    !isValidLat(coordinates[1]) ||
    (coordinates[0] === DEFAULT_COORDINATES[0] &&
      coordinates[1] === DEFAULT_COORDINATES[1]) ||
    (coordinates[0] === 0 && coordinates[1] === 0);

  if (needsFreshGeocode) {
    await geocodeListing(listing);
    await listing.save();
  }

  res.render("listings/show.ejs", {
    listing,
    currUser: req.user,
  });
};

// CREATE NEW LISTING (POST)

module.exports.UpdateNewListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  if (req.file) {
    newListing.image = { url: req.file.path, filename: req.file.filename };
  }

  await geocodeListing(newListing);

  await newListing.save();
  req.flash("success", "New Listing Created successfully!");
  res.redirect("/listings");
};

// EDIT LISTING PAGE

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist");
    return res.redirect("/listings");
  }

  const originalImageUrl =
    listing.image && listing.image.url
      ? listing.image.url.replace("/upload", "/upload/w_250,h_200,c_fill")
      : "https://via.placeholder.com/250x200?text=No+Image";

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// UPDATE EXISTING LISTING

module.exports.updateEditListing = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body.listing;

  // Find and update listing with new text data
  const listing = await Listing.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  if (!listing) throw new ExpressError(404, "Listing not found");

  let shouldSave = false;

  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
    shouldSave = true;
  }

  // Re-geocode only if location or country data was passed in the request body
  if (updatedData.location || updatedData.country) {
    await geocodeListing(listing);
    shouldSave = true;
  }

  // Save the listing to persist image and/or geometry updates
  if (shouldSave) {
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

// DELETE LISTING

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) throw new ExpressError(404, "Listing not found");

  req.flash("success", "Listing Deleted successfully!");
  res.redirect("/listings");
};
