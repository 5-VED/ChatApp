const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sender_name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    messages: {
      type: String,
    },
  },
  {
    timestamps:true
  }
);

const User = new mongoose.model("onlineusers", userSchema);
module.exports = { User };
