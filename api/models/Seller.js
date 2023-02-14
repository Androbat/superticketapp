const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    sellername: { 
        type: String, 
    },
    email: {
      type: String,
      unique: true,
    },
    storename: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", SellerSchema);
