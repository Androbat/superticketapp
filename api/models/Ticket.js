const mongoose = require('mongoose');


const TicketSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticket_name: String,
    price: Number,
    description: String,
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' } // reference to the store_id check**
    
});

// testing


module.exports = mongoose.model('Ticket', TicketSchema);