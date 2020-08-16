const mongoose = require("mongoose");

const SchemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  centralOrState: {
    type: String,
    enum: ["urban", "rural"],
    required: true,
  },
  qualifiedStates: {
    type: Object,
    required: true,
  },
  documentsRequired: {
    type: Object,
    required: true,
  },
  conditionsRequired: [
    {
      gender: {
        type: Boolean,
        required: true,
      },
      maritalStatus: {
        type: String,
        enum: ["Married", "Unmarried", "Widow"],
        required: true,
      },
      educationStatus: {
        type: String,
        enum: ["12th", "10th", "8th"],
        required: true,
      },
      reservationStatus: {
        type: String,
        enum: ["GEN", "SC", "ST", "OBC"],
        required: true,
      },
      personWithDisability: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

module.exports = Schemes = mongoose.model("schemes", SchemeSchema);
