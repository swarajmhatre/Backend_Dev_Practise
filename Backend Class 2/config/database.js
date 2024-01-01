const mongoose = require('mongoose');
require('dotenv').config(); //loads env config in process object

const dbConnect = ()=>{
    // console.log(process.env.DATABASE_URL)
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("DB connect hoya re!");
    })
    .catch((error)=>{
        console.log("Issue hai re db main");
        console.log(error.message);
        process.exit(1);
    });
};
module.exports = dbConnect;