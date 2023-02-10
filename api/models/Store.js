const mongoose = require('mongoose');
const Seller = require('./Seller');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    sellerId: {
        type: String,
        required: true,
    }
});