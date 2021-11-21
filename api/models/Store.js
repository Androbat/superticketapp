const mongoose = require('mongoose');
const sellerModel = require('./Seller');

const StoreSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    store_name: String,
    description: String,
    seller_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' }, // reference the seller model to the store **Check it
});

module.exports = mongoose.model('Store', StoreSchema);