const express = require("express");
const dotenv = require("dotenv");
// Load config
dotenv.config({ path: "./config/config.env" });

const router = express.Router();

const validateRegisterInput = require("../../controllers/register");
const validateLoginInput = require("../../controllers/login");
const User = require("../../models/User");
const Department = require("../../models/Department");
const AppliedSchemes = require("../../models/AppliedSchemes");
// @route POST department/dept/
// @desc Shows all users of that state
// @access Public
router.get("/", async (req, res) => {
  try {
    const state = req.body.state;
    const users = await User.find({ state: state });
    if (users) res.status(200).json(users);
    else res.status(200).json({ message: "No existing users in your state" });
  } catch (error) {
    res.status(500).json({ message: err });
  }
});
//@route UPDATE department/dept/:id
//@desc UPDATE A
//@access Public
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateitem = await AppliedSchemes.updateOne(
      { _id: id },
      {
        $set: { applicationStatus: req.body.applicationStatus },
      }
    );
    res.status(200).json(updateitem);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;
