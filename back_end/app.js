const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user.model");
const bcrypt = require("bcrypt");
const cors = require("cors");
 const mongo_url = "mongodb://localhost:27017//Project_309";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//add user
app.post("/signup", async (req, res) => {
  try {
    const user_param = req.body;
    if (await User.findOne({ email: user_param.email })) {
      res.send("email " + user_param.email + " is already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user_param.password, salt);
    user_param.password = hashpass;
    const user = new User();
    await user.save();
    res.status(200).send("User is Succses to Add")
  } catch (error) {
    res.status(500).send("server error" + error);
  }
});

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
