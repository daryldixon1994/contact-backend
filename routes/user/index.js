const express = require("express");
const route = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

route.post("/register", require("./register"));
route.post("/login", require("./login"));
route.post(
  "/addContact",
  verifyToken,
  upload.single("photo"),
  require("./addContact")
);
route.get("/contacts", verifyToken, require("./getContacts"));
route.put("/updateContact/:contactId", verifyToken, require("./updateContact"));
route.delete(
  "/deleteContact/:contactId",
  verifyToken,
  require("./deleteContact")
);
route.delete("/deleteAccount", verifyToken, require("./deleteAccount"));
route.put(
  "/updatePhoto",
  verifyToken,
  upload.single("photo"),
  require("./updatePhoto")
);

module.exports = route;
