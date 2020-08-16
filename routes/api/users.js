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
      const incomeRangeObject = ;
      
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


