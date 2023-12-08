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
// const mongo_url = "mongodb://localhost:27017//Project_309";
const productRouter=require('./routes/productRoute')

/////////
const Product=require("./model/products.model")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//regigter login 
app.use("/api/auth", require("./routes/authRoute"));

// get users all suers 
app.use("/api/users", require("./routes/usersRoute") );

// api prouducts 
app.use("/api/product",productRouter);


//connect Mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Project_309") 
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(8001, () => console.log("app started on port 8001"));
  })
  .catch((error) => {
    console.log("Cant connect to MongoDB" + error);
  });
