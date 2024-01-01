// import the model
const dbConnect = require('../config/database');
const blogs = require("../models/blogs");

exports.createBlog = async(req, res)=>{
    try{
        // extract title and content from request
        const {title, content, likesCount, comments} = req.body;

        const response = await blogs.create({title, content, likesCount, comments});

        res.status(200).json({
            success : true,
            data: response,
            message : 'Entry Created Successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(100).json({
            success: false,
            data: 'Internal Server Error',
            message : err.message,
        })
    }
}