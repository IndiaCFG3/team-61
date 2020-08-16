const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const methodOverride = require("method-override");
const passport = require("passport");
// const session = require("express-session");
// const db = require("./config/keys").mongoURI;
const connectDB = require("./config/db");
var user = require("./routes/api/users");
var main = require("./routes/api/main");
var dept = require("./routes/department/dept");
var admin = require("./routes/department/admin");
dotenv.config({ path: "./config/config.env" });
// Passport config
require("./config/passport")(passport);

connectDB();

const app = express();

//parse url encoded bodies as sent by forms
app.use(bodyParser.urlencoded({ extended: false }));
//parse json bodies(as sent by api clients)
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//setting up routes
app.use("/main", main);
app.use("/api/users", user);
app.use("/department/dept", dept);
app.use("/department/admin", admin);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
