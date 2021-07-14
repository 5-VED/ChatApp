const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const convSchema = new Schema(
  {
    members:{
      type:Array
    }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
}
);

const Conversation = new mongoose.model('conversation',convSchema);
