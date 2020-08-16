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
    enum: ["Central", "State"],
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
  gender: {
    type: String,
    enum: ["Female", "Male"],
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ["Married", "Unmarried" ,"Widow/Widower"],
    required: true,
  },
  educationStatus: {
    type: String,
    enum: ["10th Pass","12th Pass","Undergraduate","Graduate and above","None of the above"],
    required: true,
  },
  reservationStatus: {
    type: String,
    enum: ["General","SC","ST","OBC","EWC"],
    required: true,
  },
  personWithDisability: {
    type: String,
    enum: ["YES", "NO"],
    required: true,
  },
  urbanRural: {
    type: String,
    enum: ["Urban", "Rural"],
    required: true,
  },
});

module.exports = Schemes = mongoose.model("schemes", SchemeSchema);
