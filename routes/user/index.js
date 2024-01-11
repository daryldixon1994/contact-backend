const express = require("express");
const route = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");
// register
route.post("/register", require("./register"));
// login
route.post("/login", require("./login"));
// add contact
route.post(
  "/addContact",
  verifyToken,
  upload.single("photo"),
  require("./addContact")
);
// get contacts
route.get("/contacts", verifyToken, require("./getContacts"));
// update contact
route.put("/updateContact/:contactId", verifyToken, require("./updateContact"));

//update  contact photo
route.put(
  "/updateContactPhoto/:id",
  verifyToken,
  upload.single("photo"),
  require("./updateContactPhoto")
);
// delete contact
route.delete(
  "/deleteContact/:contactId",
  verifyToken,
  require("./deleteContact")
);
// delete account
route.delete("/deleteAccount", verifyToken, require("./deleteAccount"));

// update user photo
route.put(
  "/updatePhoto",
  verifyToken,
  upload.single("photo"),
  require("./updatePhoto")
);

module.exports = route;
