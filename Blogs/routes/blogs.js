const express = require('express');
const router = express.Router();

// import controller
const {createBlog} = require('../controllers/postController');
 

// define API routes
router.post('/createBlog', createBlog);


// export
module.exports = router;