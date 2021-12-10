const Ticket = require('../models/Ticket');

// Ticket test
let addTicket = () => {
        
  let ticket = new Ticket({_id: 1, ticket_name: 'Gorda', price: 5.2, description: 'descrip'});
  ticket.save();


}




addTicket();