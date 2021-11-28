const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Ticket = require('./models/Ticket');

// mongo db connection
mongoose.connect(process.env.URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }, () => { console.log('Connected')}
    );


    let addTicket = (req, reply) => {
        
          

          try {

            const ticket = new Ticket({ticket_name: "Grada", price: 1.52, description: "hola"})
            return ticket.save()

            console.log("It's working");
  
          } catch (error)
          {

            console.error(error);
          }
        
      }
    

    /* testing
    const database = moongose.connection;

    database.on('Error', console.error.bind(console, 'connection error: '));
    database.once('open', () => {
        console.log('coneccted!');
    });
    */

    addTicket();