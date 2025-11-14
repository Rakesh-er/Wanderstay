const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/users.js");

// Render signup page & update signup
router
  .route("/signup")
  .get(userController.signupPage)
  .post(wrapAsync(userController.signup));

// loginPage & login
router
  .route("/login")
  .get(userController.loginPage)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

// logout
router.get("/logout", userController.logout);

module.exports = router;
