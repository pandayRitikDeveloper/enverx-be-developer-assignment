const express = require('express'); //import express
const router = express.Router();

const blogPostController = require('../controllers/blogPostController');
router.get('/posts', blogPostController.getAllBlog);
router.post('/posts', blogPostController.createBlog);
router.delete('/posts/:id',blogPostController.deleteBlogById);
router.put('/posts/:id', blogPostController.updateBlogById);
router.get('/posts/:id', blogPostController.seachBlogById);


module.exports = router;
