const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
const multer = require("../../middlewares/multer");
// register : /api/admin/register
// router.post("/register", require("./register"));

// login : /api/admin/login
router.post("/login", require("./login"));

// get users : /api/admin/getUsers
router.get("/getUsers", verifyToken, require("./getUsers"));

//ban user : /api/admin/banUser
router.put("/banUser/:userId", verifyToken, require("./banUser"));

//ban user : /api/admin/unbanUser
router.put("/unbanUser/:userId", verifyToken, require("./unbanUser"));

//add post : /api/admin/addpost
router.post(
  "/addPost",
  verifyToken,
  multer.single("postPic"),
  require("./addPost")
);

module.exports = router;
