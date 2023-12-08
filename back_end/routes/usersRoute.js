const router = require("express").Router();
const { removeUserByIdProfileCtrl } = require("../controllers/userController");
const { removeUserByEmailProfileCtrl } = require("../controllers/userController");
const { getAllUserCtrl, getUserProfileCtrl, updateUserProfileCtrl } = require("../controllers/userController");
const { verfiyToken } = require("../middleware/verifyToken");




// router /api/users/profile

router.route("/profile").get(verfiyToken,getAllUserCtrl);


// router /api/user/profile/:email to get user
router.route("/profile/:email").get(getUserProfileCtrl);

// router /api/user/profile/:email this is to update
router.route("/profile/:email").put(updateUserProfileCtrl);

// router  /api/users/removeById
router.route("/removeById/:id").delete(removeUserByIdProfileCtrl);


//   router /api/users/removeByEmail
router.route("/removeByEmail/:email").delete(removeUserByEmailProfileCtrl);

module.exports = router;
