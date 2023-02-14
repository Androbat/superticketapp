const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");
const logger = require('morgan')
require('dotenv').config({path: './config/.env'});
// routes
const clientRoutes = require('./routes/clientsRoutes')
const authRoutes = require('./routes/clientsRoutes')
const sellerRoutes = require('./routes/clientsRoutes')

const connectDB = require('./config/database')


// to avoid deprecation warning in mongoose 7
mongoose.set("strictQuery", false);
connectDB()

app.get("/", (req, res) => {
  res.send('klk')
});

// Cross Origin Resource Sharing
app.use(cors());

app.use(logger('dev'))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json 
app.use(express.json());

app.use('/clients', clientRoutes)
app.use('/sellers', sellerRoutes)
app.use('/auth', authRoutes)




const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
