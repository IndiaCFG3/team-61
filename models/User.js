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
    "<1 Lakh": Boolean,
    "1 - 3 Lakh": Boolean,
    "3 - 5 Lakh": Boolean,
    "5> Lakh": Boolean,
    required: true, 
  },
  maritalStatus: {
    "married": Boolean,
    "unmarried": Boolean,
    "widow/widower": Boolean,
    required: true
  },
  educationStatus: {
    "10th Pass": Boolean,
    "12th Pass": Boolean,
    "Undergraduate": Boolean,
    "Graduate and above": Boolean,
    "None of the above": Boolean,
    required: true,
  },
  reservationStatus: {
    "General": Boolean,
    "SC": Boolean,
    "ST": Boolean,
    "OBC": Boolean,
    "EWC": Boolean,
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
    urban: Boolean,
    rural: Boolean,
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
  },
  appliedSchemes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: appliedSchemesSchema,
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
    central: Boolean,
    state: Boolean,
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
  conditionsRequired: {
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
      urban: Boolean,
      rural: Boolean,
      required: true
    },
  }
});

appliedScheme = new mongoose.Document({
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

