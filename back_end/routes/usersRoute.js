const router = require("express").Router();
const { removeUserByIdProfileCtrl, UpdatePhotoProfileCtrl } = require("../controllers/userController");
const { removeUserByEmailProfileCtrl } = require("../controllers/userController");
const { getAllUserCtrl, getUserProfileCtrl, updateUserProfileCtrl } = require("../controllers/userController");
const photoUpdate = require("../middleware/photoUpdate");
const { verfiyToken } = require("../middleware/verifyToken");




// router /api/users/profile
router.route("/profile").get(verfiyToken,getAllUserCtrl);

  
// router /api/user/profile/:email to get user BY EMAIL
router.route("/profile/:email").get(getUserProfileCtrl);

// router /api/user/profile/:email this is to update Using email
router.route("/profile/:email").put(updateUserProfileCtrl);

// router  /api/users/removeById
router.route("/removeById/:id").delete(verfiyToken,removeUserByIdProfileCtrl);

//   router /api/users/removeByEmail
router.route("/removeByEmail/:email").delete(verfiyToken,removeUserByEmailProfileCtrl);


//   router /api/users/updatePhoto post
router.route("/updatePhoto").post(verfiyToken,photoUpdate.single("image"),UpdatePhotoProfileCtrl);

module.exports = router;
