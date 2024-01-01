const mongoose = require('mongoose');

// route handles
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Post",
    },
    users:{
        type: String,
        required: true,
    },
});

// export
module.exports = mongoose.model("Like", likeSchema);