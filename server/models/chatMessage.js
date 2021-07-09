const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true
  }
});

const Message = new mongoose.model("chat", messageSchema);
module.exports = { Message };
