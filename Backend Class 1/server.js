 /* 
 step 1: Create a folder
 step 2: move into that folder
 step 3: npm init -y
 step 4: open folder using VSC
 step 5: npm i express
 step 6: create server.js 
 */

// Server Instantiate
const express = require('express');
const app = express();

// used to parse req.body in express->PUT/POST
const bodyParser = require('body-parser');

// Specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());

// Activate server on Port 3000
app.listen(3000,()=>{
    console.log("Server started at port: 3000 \n https://localhost:3000")
});

// Routes
app.get('/', (req,res)=>{
    res.send("Hello G, Kaise ho saare")
})

app.post('/api/cars', (req,res)=>{
   const {name, brand} = req.body;
   console.log(name);
   console.log(brand);
   res.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 6
})
.then(()=>{
    console.log("Connection Successful")
})
.catch((error)=>{
    console.log(error);
});