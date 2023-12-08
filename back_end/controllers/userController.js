const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { User,ValidateUpdateUser } = require("../model/user.model");

/**
 * GET ALL USER
 * router /api/auth/users/profile
 * mathod GET
 */
module.exports.getAllUserCtrl = asyncHandler(async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(400).json({ message: "your are not a admin " });
    }
    const user = await User.find().select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET  USER by email
 * router /api/user/profile/:email
 * mathod GET
 */
module.exports.getUserProfileCtrl = asyncHandler(async (req, res) => {
  try {
    // req id
    const email = req.params.email;
    // find by email in users
    const user = await User.findOne({ email: email }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * update  USER by email
 * router /api/users/update/:email
 * mathod put
 */
module.exports.updateUserProfileCtrl = asyncHandler(async (req, res) => {
  try {
    const { error } = ValidateUpdateUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let newuser = req.body;
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    if (user) {
      if (newuser.username) {
        user.username = newuser.username;
      }
      if (newuser.email) {
        user.email = newuser.email;
      }
      if (newuser.password) {
        user.password = newuser.password;
      }
      if (newuser.phoneNumber) {
        user.phoneNumber = newuser.phoneNumber;
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();
    return  res.status(200).json({user});
    } else {
      res.send("can not find user with this email !!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

});
/**
 * delete Userby id 
 * router /api/users/removeByid
 * mathod delete 
 */
module.exports.removeUserByIdProfileCtrl = asyncHandler(async (req, res) =>{
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .send({ message: `cannot find any user with ID ${id}` });
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/**
 * delete Userby EMAIL 
 * router /api/users/removeByEmail
 * mathod delete 
 */

module.exports.removeUserByEmailProfileCtrl = asyncHandler(async (req, res) =>{
  try {
    const  new_param  = req.params.email;
    const user = await User.findOneAndDelete({email: new_param})
    if (!user) {
      return res
        .status(404)
        .send({ message: `cannot find any user with email ${new_param}` });
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});