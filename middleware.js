const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schemaValidation");
const ExpressError = require("./utils/ExpressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Check the request method
    if (req.method === "GET") {
      // If it's GET, save the original URL
      req.session.redirectUrl = req.originalUrl;
    }
    // If it's NOT GET (e.g., POST, DELETE) and we have a listing ID...
    else if (req.params.id) {
      req.session.redirectUrl = `/listings/${req.params.id}`;
    }
    // Fallback for other non-GET routes (like POST /listings)
    else {
      req.session.redirectUrl = "/listings";
    }

    // This is your original flash message
    req.flash("error", "You must be logged in to make changes!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  if (!res.locals.currUser || !listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have the permission to make changes!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${id}`);
  }
  if (!res.locals.currUser || !review.author.equals(res.locals.currUser._id)) {
    // This is your original flash message
    req.flash("error", "You didn't created this review !");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
