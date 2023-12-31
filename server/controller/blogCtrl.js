const Blog = require("../models/blogModel");
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbid');
const cloudinaryUpload = require('../utils/cloudinary')
const fs = require('fs');

const createBlog = asyncHandler( async(req, res)=>{
    try{
        const newBlog = await Blog.create(req.body);
        res.json({
            status:'success',
            newBlog,
        })

    }catch(error){
        throw new Error(error)
    }
});

const updateBlog = asyncHandler( async(req, res)=>{
    const {id} = req.params
    try{
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updateBlog)

    }catch(error){
        throw new Error(error)
    }
});

const getBlog = asyncHandler( async(req, res)=>{
    const {id} = req.params
    validateMongoDbId(id)
    try{
        const getBlog = await Blog.findById(id).populate('likes').populate('dislikes');
        await Blog.findByIdAndUpdate(
            id,
            {
                $inc:{numViews: 1},
            },
            {new: true},
        );
        res.json(getBlog)

    }catch(error){
        throw new Error(error)
    } 
});

const getAllBlogs = asyncHandler(async(req, res)=>{
    try{
        const getBlogs = await Blog.find();
        res.json(getBlogs);
    }catch(error){
        throw new Error(error);
    }
})

const deleteBlog = asyncHandler( async(req, res)=>{
    const {id} = req.params
    validateMongoDbId(id)
    try{
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog)

    }catch(error){
        throw new Error(error)
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId); // A custom validation function
  
    // Fetch the blog that will be liked or disliked
    const blog = await Blog.findById(blogId);
  
    // Fetch the logged-in user
    const loginUserId = req?.user?._id;
  
    // Check if the user already liked the post
    const isLiked = blog?.isLiked; 
  
    // Check if the user already disliked the post
    const alreadyDisliked = blog?.dislikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
  
    if (alreadyDisliked) {
      // If the user already disliked the post, remove the dislike and set isDisliked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    }
  
    if (isLiked) {
      // If the user already liked the post, remove the like and set isLiked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      // If the user hasn't liked the post, add the like and set isLiked to true
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { likes: loginUserId },
          isLiked: true,
        },
        { new: true }
      );
      res.json(updatedBlog);
    }
});
  

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId); // A custom validation function
  
    // Fetch the blog that will be liked or disliked
    const blog = await Blog.findById(blogId);
  
    // Fetch the logged-in user
    const loginUserId = req?.user?._id;
  
    // Check if the user already disliked the post
    const isDisliked = blog?.isDisliked; 
  
    // Check if the user already liked the post
    const alreadyLiked = blog?.likes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
  
    if (alreadyLiked) {
      // If the user already liked the post, remove the like and set isLiked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    }
  
    if (isDisliked) {
      // If the user already disliked the post, remove the dislike and set isdisLiked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      // If the user hasn't disliked the post, add the dislike and set isdisLiked to true
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { dislikes: loginUserId },
          isDisliked: true,
        },
        { new: true }
      );
      res.json(updatedBlog);
    }
});
  
const uploadImg = asyncHandler( async(req, res)=>{
  const {id} = req.params;
  validateMongoDbId(id);
  try{
     const uploader = (path) => cloudinaryUpload(path, 'images');
     const urls = [];
     const files= req.files;
     for (const file of files){
         const {path} = file;
         const newpath = await uploader(path);
         urls.push(newpath); 
         fs.unlinkSync(path)
     }
     const findBlog = await Blog.findByIdAndUpdate(
         id, 
         {
             images: urls.map((file)=>{
                 return file;
             }),
         }, 
         {
             new: true,
         }
     );
     res.json(findBlog)
  }catch(error){
     throw new Error(error)
  }
})

module.exports = {createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImg};