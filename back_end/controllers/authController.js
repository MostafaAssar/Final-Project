const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const {
User,
ValidateRegisterUser,ValidateLoginUser} = require("../model/user.model");

/**
 * Register new User  -signup
 * router /api/auth/register
 * mathod Post 
 */
module.exports.registerUserCtrl = asyncHandler(async(req,res)=>{
  const { error } = ValidateRegisterUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user_para = req.body;
    if (await User.findOne({ email: user_para.email })) {
      return res.send("email " + user_para.email + " is already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user_para.password, salt);
    user_para.password = hashpass;
    const user = new User(user_para);
    //save user
    await user.save();
    return res.status(201).send("Add user is Succes");
});
/**
 * Login User
 * router /api/uses/login
 * mathod Post 
 */
module.exports.loginUserCtrl = asyncHandler(async(req,res)=>{
  const { error } = ValidateLoginUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json("envalid email or password");
  }
  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordMatch) {
    return res.status(400).json("envalid email or password");
  }
  const token = user.generatToken();
  return res.status(200).json({
    _id: user.id,
    username: user.username,
    isAdmin: user.isAdmin,
    profilephoto: user.image,
    token,
  });
});

