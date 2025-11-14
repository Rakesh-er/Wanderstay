const mongoose = require("mongoose");
const Review = require("./review");

const schemaListing = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  //  GeoJSON field for map coordinates
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true,
      default: [0, 0],
    },
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Amazing Pools",
      "Camping",
      "Farms",
      "Arctic",
      "Barns",
      "Beachfront",
    ],
  },
});

//  Delete reviews if listing deleted
schemaListing.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

//  Add geospatial index
schemaListing.index({ geometry: "2dsphere" });

const Listing = mongoose.model("Listing", schemaListing);
module.exports = Listing;
