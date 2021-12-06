const Ticket = require('../models/Ticket');

// Ticket test
let addTicket = (req, reply) => {
        
          

    try {

      let ticket = Ticket({_id: 1, ticket_name: 'Gorda', price: 5.2, description: 'descrip'});
      ticket.save();

      console.log("It's working");

    } catch (error)
    {

      console.error(error);
    }
  
}


addTicket();