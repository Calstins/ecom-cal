const BlogCategory = require('../models/blogCatModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbid');

const createBlogCategory = asyncHandler( async (req, res)=>{
    try{
        const newCategory = await BlogCategory.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
}) 


const updateBlogCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const updatedCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updatedCategory);
    }catch(error){
        throw new Error(error);
    }
})


const deleteBlogCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const deleteCategory = await BlogCategory.findByIdAndDelete(id);
        res.json(deleteCategory);
    }catch(error){
        throw new Error(error);
    }
})


const getBlogCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const getaCategory = await BlogCategory.findById(id);
        res.json(getaCategory);
    }catch(error){
        throw new Error(error);
    }
}) 


const getAllBlogCategory = asyncHandler( async (req, res)=>{
    try{
        const getallCategory = await BlogCategory.find();
        res.json(getallCategory);
    }catch(error){
        throw new Error(error);
    }
}) 

module.exports = { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory, getAllBlogCategory };