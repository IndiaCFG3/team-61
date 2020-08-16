const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: true
  },
  incomeRange: {
    type: String,
    required: true, 
  },
  maritalStatus: {
    type: String,
    enum: ["married","unmarried","widow/widower"],
    required: true
  },
  educationStatus: {
    type: String,
    enum: ["10th Pass","12th Pass","Undergraduate","Graduate and above","None of the above"],
    required: true,
  },
  reservationStatus: {
    type: String,
    enum: ["General","SC","ST","OBC","EWC"],
    required: true
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
    enum: ["urban", "rural"],
    required: true
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
  }
});

const SchemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  centralOrState: {
    type: String,
    enum: ["central","state"],
    required: true
  },
  qualifiedStates: {
    type: Object,
    required: true
  },
  documentsRequired: {
    type: Object,
    required: true,
  },
  conditionsRequired: [{
    gender: {
      type: Boolean,
      required: true
    },
    isIncomeMoreThan5L: {
      type: Boolean,
      required: true
    },
    maritalStatus: {
      type: String,
      required: true
    },
    educationStatus: {
      type: String,
      required: true,
    },
    reservationStatus: {
      type: String,
      required: true
    },
    personWithDisability: {
      type: Boolean,
      required: true,
    },
    urbanRural: {
      type: String,
      enum: ["urban", "rural"],
      required: true
    },
  }],
});

userScheme = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  schemeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Scheme"
  },
  applicationStatus: {
    notApplied: Boolean,
    documentsNotVerified: Boolean,
    applied: Boolean,
    required: true
  }
})

module.exports = User = mongoose.model("users", UserSchema);
module.exports = Scheme = mongoose.model("schemes", SchemeSchema);

