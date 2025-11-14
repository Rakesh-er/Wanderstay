const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.addingReview = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  const { rating, comment } = req.body.review || {};

  // Validation
  if (!rating || !comment) {
    req.flash("error", "Please provide both rating and comment.");
    return res.redirect(`/listings/${id}`);
  }

  if (!req.user) {
    req.flash("error", "You must be logged in to add a review.");
    return res.redirect("/login");
  }

  const newReview = new Review({
    rating,
    comment,
    author: req.user._id,
  });

  await newReview.save();

  listing.reviews.push(newReview);
  await listing.save();

  req.flash("success", "Review added successfully!");
  res.redirect(`/listings/${listing._id}`);
};

// DELETE REVIEW
module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted successfully!");
  res.redirect(`/listings/${id}`);
};
