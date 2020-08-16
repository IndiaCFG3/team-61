const express = require("express");
const bcrypt = require("bcryptjs");
//to hash the password
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const dotenv = require("dotenv");
// Load config
dotenv.config({ path: "./config/config.env" });

const router = express.Router();

const validateRegisterInput = require("../../controllers/register");
const validateLoginInput = require("../../controllers/login");
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        gender: req.body.gender
      });
      // Hash password before saving in database
      bcrypt.hash(newUser.password, 12).then((hashed) => {
        newUser.password = hashed;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    }
  });
});

module.exports = router;


