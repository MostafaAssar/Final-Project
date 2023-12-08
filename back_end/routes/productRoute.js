const express=require('express');
const {addProduct,getProduct,getAllProducts,removeProuducts,editproducts}=require("../controller/productCtrl");
const { verfiyToken } = require('../middleware/verifyToken');
const router=express.Router();
// addproducts by admin
router.route("/").post(verfiyToken,addProduct)

//get products by id
router.get("/:id",getProduct)
// // get all products
router.get("/",getAllProducts)
// // delete product by admin
router.route("/:id").delete(verfiyToken,removeProuducts)
//edit products by admin
router.route("/:id").put(verfiyToken,editproducts)



module.exports=router;   