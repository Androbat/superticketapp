const mongoose = require('mongoose');


const ClientUserSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    fullName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, unique: true, lowercase: true, require: true },
    hash_password: String, // function that creates a value in a fixed random one. "sha-1" = hash function 40 long characters
    salt: String,  // 12 random bits + user-password to encrypt the user-password.
}, { timestamps: true}

);

// Add validation to models *

/** 
 - "Timestamps" - is a feature that mongoose has to  automatically manage 'CreateAt and UpdateAt' properties.
 - CreateAt - is a property that tells you the date, when the file was created. UpdateAt does the same, but with updating.
 - DOC: masteringjs.io/tutorials/mongoose/timestamps 
 **/

 /** 
  - Rainbow table - Precomputed table for reversing cryptographic hash functions, usually for cracking password hashes.
**/


module.exports = mongoose.model('Client', ClientUserSchema);
