const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const msgSchema = new Schema(
  {
    text:{
      type:String
    }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);