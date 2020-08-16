const express = require("express");
const dotenv = require("dotenv");
// Load config
dotenv.config({ path: "./config/config.env" });

const router = express.Router();

const Schemes = require("../../models/Schemes");

// // @route GET api/main
// // @desc Get all the schemes
// // @access Public
// // redirect the second page here shows all schemes
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

// @route GET /main
// @desc Get the schemes
// @access Public
// redirect the second page here shows all schemes
router.get("/", async (req, res) => {
  try {
    const schemes = await Schemes.find();
    res.status(200).json(schemes);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
