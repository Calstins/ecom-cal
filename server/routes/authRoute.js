const express = require('express')
const { 
    createUser, 
    loginAdminCtrl,
    loginUserCtrl, 
    getAllUsers, 
    getSingleUser, 
    deleteUser, 
    updateUser, 
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetForgotPassword,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    getAllOrders,
    updateOrderStatus,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
 

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetForgotPassword)
router.put('/password', authMiddleware, updatePassword)
router.post('/login', loginUserCtrl);
router.post('/admin-login', loginAdminCtrl);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);


router.post('/cart', authMiddleware, userCart);
router.get('/cart', authMiddleware, getUserCart);
router.delete('empty-cart', authMiddleware, emptyCart);
router.post('/cart/applycoupon', authMiddleware, applyCoupon);
router.post('/cart/cash-order', authMiddleware, createOrder);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/get-orders', authMiddleware, getOrders);
router.get('/getallorders', authMiddleware, isAdmin, getAllOrders);
router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)


router.get('/:id', authMiddleware, isAdmin, getSingleUser);
router.get('/all-users', getAllUsers);
router.delete('/:id', deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);


module.exports = router;