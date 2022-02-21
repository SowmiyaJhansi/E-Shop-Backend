const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Contactnumber: String,
    Password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = User;