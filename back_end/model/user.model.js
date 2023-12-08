const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const jwt = require("jsonwebtoken");
//schema for user and some property
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 60,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
    phoneNumber: { type: String, required: false },
    image: {
      type: Object,
      required: false,
      default: {
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
//generate token
userSchema.methods.generatToken = function () {
  return jwt.sign({ _id: this.id, isAdmin: this.isAdmin }, "Secret123");
};

const User = mongoose.model("User", userSchema);

//validate NEW user
function ValidateRegisterUser(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().trim().min(7).max(60).required(),
    password: Joi.string().trim().min(7).required(),
    phoneNumber: Joi.string().trim(),
  });
  return schema.validate(obj);
}
//validate Login user
function ValidateLoginUser(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(7).max(60).required(),
    password: Joi.string().trim().min(7).required(),
  });
  return schema.validate(obj);
}
function ValidateUpdateUser(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(3).max(60).required(),
    password: Joi.string().trim().min(7),
  });
  return schema.validate(obj);
}
//validate email is true
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  User,
  ValidateRegisterUser,
  ValidateLoginUser,
  ValidateUpdateUser,isValidEmail,
};
