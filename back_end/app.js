const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  User,
  ValidateRegisterUser,
  ValidateLoginUser,
  ValidateUpdateUser,
} = require("./model/user.model");
// const{verfiyToken}=require("../back_end/middleware/verfiyToken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const mongo_url = "mongodb://localhost:27017//Project_309";

/////////
const Product=require("./model/products.model")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//regigter login 
app.use("/api/auth", require("./routes/authRoute"));

// get users all suers 
app.use("/api/users", require("./routes/usersRoute") );


// get all products
app.get("/allproducts",async(req,res)=>{
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
// get product by id
app.get("/getproduct/:id", async (req, res) => {
  try {
    // req id
    const {id} = req.params;
    // find by id in products
    const findproducts = await Product.findById(id);
    res.status(200).json(findproducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// add products
app.post("/addproducts",async(req,res)=>{
  const addproduct=await Product.create(req.body)
  try{
  res.status(200).json(addproduct)
  }catch (error){
    res.status(500).json({ message: error.message });
  }
})
//delete prouduct
app.delete("/removeproduct/:id",async(req,res)=>{
  const {id} = req.params;
  try{
  const findproduct=await Product.findByIdAndDelete(id)
if(!findproduct){
returnres.status(400).json({message:`not found ${id}`})
}
res.status(200).json(findproduct)
}catch(error){
  res.status(500).json({message: error.message})
}
})
///////// edit in prouducts by id
app.put("/editproducts/:id",async(req,res)=>{
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
    } else {
      res.send("can not find product with this id !!");
    }
  } catch (error) {
    res.status(500).json({ message: error.details.message });
}}
);

//connect Mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/Project_309") 
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(8001, () => console.log("app started on port 8001"));
  })
  .catch((error) => {
    console.log("Cant connect to MongoDB" + error);
  });
