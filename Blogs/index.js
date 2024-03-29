const express = require('express');
const app = express();

// load config from env
require('dotenv').config();

const PORT = process.env.PORT || 8090;

// middleware to parse JSON request body
app.use(express.json());

// import routes from API
const blog = require('./routes/blogs')

// mount API routes
app.use('/api/v1', blog);


// connect to DB
const dbConnect = require('./config/database');
dbConnect();

// start server
app.listen(PORT, ()=>{
    console.log(`App is started at ${PORT}`);
})
// defaultRoute
app.get('/', (req, res)=>{
    res.send('<h1>This is home page<h1>')
})