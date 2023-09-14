const ProdCategory = require('../models/prodCategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbid');

const createProdCategory = asyncHandler( async (req, res)=>{
    try{
        const newCategory = await ProdCategory.create(req.body);
        res.json(newCategory);
    }catch(error){
        throw new Error(error);
    }
}) 


const updateProdCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const updatedCategory = await ProdCategory.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updatedCategory);
    }catch(error){
        throw new Error(error);
    }
})


const deleteProdCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const deleteCategory = await ProdCategory.findByIdAndDelete(id);
        res.json(deleteCategory);
    }catch(error){
        throw new Error(error);
    }
})


const getCategory = asyncHandler( async (req, res)=>{
    const {id} = req.params;
    validateMongoDbId(id)
    try{
        const getaCategory = await ProdCategory.findById(id);
        res.json(getaCategory);
    }catch(error){
        throw new Error(error);
    }
}) 


const getAllCategory = asyncHandler( async (req, res)=>{
    try{
        const getallCategory = await ProdCategory.find();
        res.json(getallCategory);
    }catch(error){
        throw new Error(error);
    }
}) 

module.exports = { createProdCategory, updateProdCategory, deleteProdCategory, getCategory, getAllCategory };