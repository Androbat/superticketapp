const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    item: {  // Since it's embeded, it's going to group all of the tickets to this "item"
        client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
        tickets: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'} // This way is going to take track of all of the tickets
    }, 
    timestamps: true // takes track of the updatedAt & createdAt
    
});




  //  client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client'}, // Reference to the client id check **
  //  tickets: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'}

module.exports = mongoose.model('Order', OrderSchema);