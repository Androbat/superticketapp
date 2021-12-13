const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const fastify = require('fastify')({
  logger: true // logger - messages to show errors, warning and debug

}); 

const PORT = 3000

const Ticket = require('./models/Ticket');

// simple route
fastify.get('/', async(request, reply) => {

  return {hello: 'This is working'}
});

// Run the server
const start = () => {

  try {
    fastify.listen(PORT);
    fastify.log.info(`Server is running`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }

};

start();

// mongo db connection
mongoose.connect(process.env.URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }
    ).then(() => {console.log('connected to database')})
     .catch((err) => {console.log(err)});








    
    
     

    

   
    
    