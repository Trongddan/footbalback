const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    username: { type: String, required: true, minLength: 8, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: null },
    fullName: { type: String, default: null },
    age: { type: Number, default: null },
    gender: { type: String, default: null },
    isAdmin: { type: Boolean, default: false },
    position:{type:String, default:"CT"},
    goals:{type:Number,default:0}
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", User);
