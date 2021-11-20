const mongoose = require('mongoose');


const SellerUserSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    fullName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, unique: true, lowercase: true, require: true },
    hash_password: String, // function that creates a value in a fixed random one. "sha-1" = hash function 40 long characters
    salt: String,  // 12 random bits + user-password to encrypt the user-password.
    storeName: String,
}, { timestamps: true}

);


module.exports = mongoose.model('Seller', SellerUserSchema);