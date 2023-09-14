const express = require('express');
const {
    createProdCategory,
    updateProdCategory,
    deleteProdCategory,
    getCategory,
    getAllCategory,
} = require('../controller/prodCategoryCtrl');
const {
    isAdmin, 
    authMiddleware,
} = require("../middlewares/authMiddleware")
const router = express.Router();

router.post('/',authMiddleware, isAdmin,  createProdCategory);
router.put('/:id',authMiddleware, isAdmin,  updateProdCategory);
router.delete('/:id',authMiddleware, isAdmin,  deleteProdCategory);
router.get( '/:id', getCategory);
router.get( '/', getAllCategory);

module.exports = router;