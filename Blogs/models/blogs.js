const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  content: {
    type: String,
    required: true,
  },
  likesCount: {
    type: Number,
    required: true,
  },
  comments: [commentSchema],
});

module.exports = mongoose.model("Blogs", blogSchema);
