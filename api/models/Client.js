const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: { 
      type: String,
      // required: true
    },
    email: { 
      type: String,
      unique: true,
      // required: true

    },
    password: {
      type: String,
      // required: true

    }
  }
);

module.exports = mongoose.model("Client", ClientSchema);
// Add validation to models *

/** 
 - "Timestamps" - is a feature that mongoose has to  automatically manage 'CreateAt and UpdateAt' properties.
 - CreateAt - is a property that tells you the date, when the file was created. UpdateAt does the same, but with updating.
 - DOC: masteringjs.io/tutorials/mongoose/timestamps 
 **/

/** 
  - Rainbow table - Precomputed table for reversing cryptographic hash functions, usually for cracking password hashes.
**/

