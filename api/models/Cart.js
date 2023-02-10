const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    clientId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Cart", CartSchema);
