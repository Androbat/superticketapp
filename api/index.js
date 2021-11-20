const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// mongo db connection
mongoose.connect(process.env.URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );

    /* testing
    const database = moongose.connection;

    database.on('Error', console.error.bind(console, 'connection error: '));
    database.once('open', () => {
        console.log('coneccted!');
    });
    */