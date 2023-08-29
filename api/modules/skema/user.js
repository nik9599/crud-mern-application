const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      requierd: true,
    },
    // profilePic: {
    //   type: String,
    //   default: "",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
