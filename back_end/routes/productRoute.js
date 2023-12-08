const express=require('express');
const {addProduct,getProduct,getAllProducts,removeProuducts,editproducts}=require("../controller/productCtrl")
const router=express.Router();
// addproducts
router.post("/",addProduct)
//get products by id
router.get("/:id",getProduct)
// // get all products
router.get("/",getAllProducts)
// // delete product
router.delete("/:id",removeProuducts)
//edit products
router.put("/:id",editproducts)

module.exports=router;  