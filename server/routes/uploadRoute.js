const express = require('express');
const {
    uploadImg,
    deleteImg
} = require('../controller/uploadCtrl');
const {
    isAdmin, 
    authMiddleware,
} = require("../middlewares/authMiddleware");
const { uploadPhoto, productImageResize } = require('../middlewares/uploadImages');
const router = express.Router();

router.put('/', authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImg); 
router.delete('/delete-image/:id', authMiddleware, isAdmin, deleteImg); 


module.exports = router;