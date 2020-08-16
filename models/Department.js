const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = Department = mongoose.model("department", DepartmentSchema);
