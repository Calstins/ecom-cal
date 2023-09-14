const asyncHandler = require('express-async-handler');
const {cloudinaryDelete, cloudinaryUpload} = require('../utils/cloudinary')
const fs = require('fs')


const uploadImg = asyncHandler( async(req, res)=>{
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

        const images = urls.map((file)=>{
            return file;
        })

        res.json(images)
     }catch(error){
        throw new Error(error)
     }
})

const deleteImg = asyncHandler( async(req, res)=>{
    const {id} = req.params;
     try{
        const deleted = cloudinaryDelete(id, 'images');
        res.json({message: 'Deleted'})
     }catch(error){
        throw new Error(error)
     }
})


module.exports = { 
    uploadImg,
    deleteImg,
};
 

