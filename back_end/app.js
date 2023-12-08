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

//add user
// app.post("/signup", async (req, res) => {
//   try {
//     const { error } = ValidateRegisterUser(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }
//     const user_para = req.body;
//     if (await User.findOne({ email: user_para.email })) {
//       return res.send("email " + user_para.email + " is already exist");
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashpass = await bcrypt.hash(user_para.password, salt);
//     user_para.password = hashpass;
//     const user = new User(user_para);
//     //save user
//     await user.save();
//     return res.status(200).send("Add user is Succes");
//   } catch (error) {
//     res.status(500).send("server error" + error);
//   }
// });
// login the old
// app.post("/login", async (req, res) => {
//   try {
//     const { error } = ValidateLoginUser(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(400).json("envalid email or password");
//     }
//     const isPasswordMatch = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordMatch) {
//       return res.status(400).json("envalid email or password");
//     }
//     const token = user.generatToken();
//     return res.status(200).json({
//       _id: user.id,
//       username: user.username,
//       isAdmin: user.isAdmin,
//       profilephoto: user.image,
//       token,
//     });
//   } catch (error) {
//     res.status(500).send("server error" + error);
//   }
// });
//get all users only for admin but now all user
// app.get("/getAllusers", async (req, res) => {
//   try {
//     const user = await User.find().select("-password");
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//get user by email
// app.get("/getUser/:email", async (req, res) => {
//   try {
//     // req id
//     const email = req.params.email;
//     // find by id in users
//     const user = await User.findOne({ email: email }).select("-password");
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//update olduser(only use can up date )

// app.put("/updateUser/:email", async (req, res) => {
//   try {
//     const { error } = ValidateUpdateUser(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }
//     let newuser = req.body;
//     const email = req.params.email;
//     const user = await User.findOne({ email: email });
//     if (user) {
//       if (newuser.username) {
//         user.username = newuser.username;
//       }
//       if (newuser.email) {
//         user.email = newuser.email;
//       }
//       if (newuser.password) {
//         user.password = newuser.password;
//       }
//       if (newuser.phoneNumber) {
//         user.phoneNumber = newuser.phoneNumber;
//       }
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(user.password, salt);
//       await user.save();
//     return  res.status(200).json({user});
//     } else {
//       res.send("can not find user with this email !!");
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.details.message });
//   }
// });
//remove user by email
// app.delete("/removeByemail/:email", async (req, res) => {
//   // req id
//   // const id = req.params.id;
//   // delet by id in users
//   try {
//     const { new_param } = req.params;
//     const user = await User.findOneAndDelete({email: new_param})
//     if (!user) {
//       return res
//         .status(404)
//         .send({ message: `cannot find any user with email ${new_param}` });
//     }
//     return res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });
//remove user by email

//////////////////////////////////////////////////////////////////////////
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
