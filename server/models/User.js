/* Users Schema for MongoDB database */

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registered: {
    type: Date,
    default: Date.now,
  },
})

// Exporting UserSchema to other components
module.exports = mongoose.model("User", UserSchema)
