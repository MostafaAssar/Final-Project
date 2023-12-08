const Product=require("../model/products.model")
const asyncHandler=require("express-async-handler")

//// addproducts
const addProduct=asyncHandler(async(req,res)=>{
    try{
        const newProduct=await Product.create(req.body);
    res.json(newProduct);
    }catch(error){
        throw new Error (error)
    }
})

////get products by id
const getProduct=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try{
const getproduct=await Product.findById(id)
res.json(getproduct)
    }catch(error){
        throw new Error (error)
    }
})

////// get all products
const getAllProducts=asyncHandler(async(req,res)=>{
    try{
const getallProduct=await Product.find()
res.json(getallProduct)
    }catch(error){
        throw new Error (error)
    }
})
//// // delete product
const removeProuducts=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try{
const deletethisproduct=await Product.findByIdAndDelete(id)
res.json(deletethisproduct)
    }catch(error){
        throw new Error (error)
    }
})

const editproducts=asyncHandler(async(req,res)=>{
    const {id}=req.params
    let newuproduct = req.body;
    try{
        const product = await Product.findById( id );
        if (product) {
            if (newuproduct.model) {
                product.model = newuproduct.model;
            }
            if (newuproduct.photo) {
                product.photo = newuproduct.photo;
            }
            if (newuproduct.body_style) {
                product.body_style = newuproduct.body_style;
            }
            if (newuproduct.year) {
                product.year = newuproduct.year;
            }
            if (newuproduct.horsepower) {
                product.horsepower = newuproduct.horsepower;
            }
            if (newuproduct.cylinders) {
                product.cylinders = newuproduct.cylinders;
            }
            if (newuproduct.weight) {
                product.weight = newuproduct.weight;
            }
            if (newuproduct.colors) {
                product.colors = newuproduct.colors;
            }
            if (newuproduct.price) {
                product.price = newuproduct.price;
            }
            if (newuproduct.retings) {
                product.retings = newuproduct.retings;
            }
            await product.save();
            return  res.status(200).json({product});
            }  else {
            res.send("can not find product with this id !!");
            }
    }catch(error){
        throw new Error (error)
    }
})

module.exports={
    addProduct,
    getProduct,
    getAllProducts,
    removeProuducts,
    editproducts
};