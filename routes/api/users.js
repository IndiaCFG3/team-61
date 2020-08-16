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
        gender: req.body.gender,
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
// @route POST /users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", async (req, res) => {
  // Form validation
  try {
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    var user = User.findOne({ email: req.body.email }).exec();
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    if (!Bcrypt.compareSync(request.body.password, user.password))
      return res
        .status(404)
        .json({ passwordnotmatch: "The password is invalid" });
    response.send({
      message: "The username and password combination is correct!",
    });
  } catch (error) {
    return response.status(404);
  }
});
// //   bcrypt.compare(password, user.password).then((isMatch) => {
// //       if (isMatch) {
// //         // User matched
// //         // Create JWT Payload
// //         const payload = {
// //           id: user.id,
// //           name: user.name,
// //         };
// //         // Sign token
// //         jwt.sign(
// //           payload,
// //           keys.secretOrKey,
// //           {
// //             expiresIn: 31556926, // 1 year in seconds
// //           },
// //           (err, token) => {
// //             res.json({
// //               success: true,
// //               token: "Bearer " + token,
// //             });
// //           }
// //         );
// //       } else {
// //         return res
// //           .status(400)
// //           .json({ passwordincorrect: "Password incorrect" });
// //       }
// //     });
// //   });
// // });
module.exports = router;
