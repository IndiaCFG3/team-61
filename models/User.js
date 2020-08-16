const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Female", "Male"],
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  incomeRange: {
    type: String,
    enum: ["<1 Lakh", "1 - 3 Lakh", "3 - 5 Lakh", "5> Lakh"],
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ["Married", "Unmarried", "Widow/Widower"],
    required: true,
  },
  educationStatus: {
    type: String,
    enum: ["10th", "12th", "UG", "None of the above"],
    required: true,
  },
  reservationStatus: {
    type: String,
    enum: ["General", "SC", "ST", "OBC", "EWC"],
    required: true,
  },
  personWithDisability: {
    type: Boolean,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  urbanRural: {
    type: String,
    enum: ["Urban", "Rural", "Urban and Rural"],
    required: true,
  },
  memberVerificationStatusPayment: {
    type: Boolean,
    required: true,
  },
  registrationTimestamp: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: false,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
