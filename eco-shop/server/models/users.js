const { Schema, model } = require("mongoose");

const User = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      ref: "role",
    },
  ],
});

module.exports = model("User", User);
