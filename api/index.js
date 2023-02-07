const express = require('express')
const mongoose = require("mongoose");
const app = express()

const connectDB = require('./config/database')


const dotenv = require('dotenv').config({path: './config/.env'});

// to avoid deprecation warning in mongoose 7
mongoose.set("strictQuery", false);
connectDB()

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


// variables creadas anteriormente.
// const Ticket = require('./models/Ticket');


// push to master
    // let addTicket = (req, reply) => {
        
          

    //       try {

    //         const ticket = new Ticket({ticket_name: "Grada", price: 1.52, description: "hola"})
    //         return ticket.save()

    //         console.log("It's working");
  
    //       } catch (error)
    //       {

    //         console.error(error);
    //       }
        
    //   }
    

    /* testing
    const database = moongose.connection;

    database.on('Error', console.error.bind(console, 'connection error: '));
    database.once('open', () => {
        console.log('coneccted!');
    });
    */

    // addTicket();