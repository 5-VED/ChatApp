const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const msgSchema = new Schema(
  {
    conversationId:{
      type:String
    },
    sender:{
      type:String
    },
    text:{
      type:String
    }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const Message = new mongoose.model('message',msgSchema);
module.exports = Message;
