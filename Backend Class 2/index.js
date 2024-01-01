const express = require('express'); //express ka instanace
const app = express(); //server ka instance

// load config from env 
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// middleware to parse JSON request body
app.use(express.json());

// import routes for TOD API
const todoRoutes = require('./routes/todos')

// mount todo API routes
app.use('/api/v1', todoRoutes);

// start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
})

// connect to db
const dbConnect = require('./config/database');
dbConnect();

//defaultRoute
app.get('/', (req,res)=>{
    res.send('<h1>This is home page</h1>')
})