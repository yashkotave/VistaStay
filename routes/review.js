const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utlis/wrapAsync.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isOwner,
  isReviewAuthor,
} = require("../middleware.js");


const reviewController = require("../controllers/reviews.js")

// create Review

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete review route

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
