const mongoose = require("mongoose");
const User = require("../models/User");
const Schemes = require("../models/Schemes");

const AppliedSchemesSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  schemeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Schemes,
  },
  applicationStatus: {
    type: String,
    enum: ["Not Applied", "Not Verified", "Applied"],
    required: true,
  },
});

module.exports = AppliedSchemes = mongoose.model(
  "appliedschemes",
  AppliedSchemesSchema
);
