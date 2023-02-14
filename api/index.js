const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");
const logger = require('morgan')
require('dotenv').config({path: './config/.env'});
// const ClientRoutes = require('./routes/clientsRoutes')

const connectDB = require('./config/database')


// to avoid deprecation warning in mongoose 7
mongoose.set("strictQuery", false);
connectDB()


// Cross Origin Resource Sharing
app.use(cors());

app.use(logger('dev'))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json 
app.use(express.json());

app.use('/clients', require('./routes/clientsRoutes'))
app.use('/sellers', require('./routes/sellersRoutes'))




const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))


