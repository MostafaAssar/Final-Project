const mongoos = require("mongoose");
const Schema = mongoos.Schema;
//schema for user and some property
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 50,
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
      type:  Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoos.model("User", userSchema);
