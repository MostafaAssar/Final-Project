const router = require("express").Router();
const { getAllUserCtrl, getUserProfileCtrl, updateUserProfileCtrl } = require("../controllers/userController");
const { verfiyToken } = require("../middleware/verifyToken");




// router /api/users/profile

router.route("/profile").get(verfiyToken,getAllUserCtrl);


// router /api/user/profile/:email
router.route("/profile/:email").get(getUserProfileCtrl);

// router /api/user/profile/:email this is update
router.route("/profile/:email").put(updateUserProfileCtrl);






module.exports = router;
