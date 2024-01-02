const Post = require('../models/postModel');

exports.createPost = async(req, res)=>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body,
        });
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while creating Post",
        })
    }
}

// need some more testing after completing the likes controller
exports.getAllPosts = async (req, res)=>{
    try{
        const posts = await Post.find().populate("likes").populate('comments').exec();
        res.send({
            posts,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while fetching all posts.",
        })
    }
}