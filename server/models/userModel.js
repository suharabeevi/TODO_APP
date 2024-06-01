const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required:true 
  },
  list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});
userSchema.methods.generateAuthToken = function () {
  try {
      const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
          expiresIn: "7d",
      });
      return token;
  } catch (error) {
      // Handle JWT signing error
      console.error("Error generating token:", error);
      throw new Error("Error generating token");
  }
};




module.exports = mongoose.model("User", userSchema);