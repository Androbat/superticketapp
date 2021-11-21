const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    order_id: mongoose.Schema.Types.ObjectId,
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client'}, // Reference to the client id check **
    
    
}, { timestamps: true}); // takes track of the updatedAt & createdAt



module.exports = mongoose.model('Order', OrderSchema);