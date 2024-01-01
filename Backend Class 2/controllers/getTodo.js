// import the mode
const dbConnect = require('../config/database');

const Todo = require('../models/Todo');



exports.getTodo = async(req, res)=>{
    try{
        // Fetch all Todo items from database
        const todos = await Todo.find({});

        // response 
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched",
        })
    }
    catch(err){
       console.error(err);
       res.status(500)
       .json({
        success: false,
        data: "internal server error",
        message: err.message,
       })
    }
}


exports.getTodoByID = async(req, res)=>{
    try{
    // extract todo item on basis of id
    const id = req.params.id;
    const todo = await Todo.findById({_id : id});

    // data for given  id not found
    if(!todo){
        return res.status(404).json({
            success : false,
            message: "No data found with id",
        })
    }
    // data for give id found
    res.status(200).json({
        success: true,
        data: todo,
        message:   `Todo ${id} data successfully fetched`
    })
    }
    catch(err){
     console.error(err);
     res.status(500).json({
        success: false,
        error: err.message,
        message: 'Server Error',
     });
    }
}