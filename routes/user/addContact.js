const Contact = require("../../models/Contact");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { contactName, phone, email, address } = req.body;
    let { id } = req.user;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    console.log(req.file);
    let { path } = req.file;
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    // let imageUrl = `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`;

    let newContact = await new Contact({
      contactName,
      phone,
      email,
      address,
      userId: id,
      imageUrl: url,
    });
    console.log(newContact);
    await newContact.save();
    res
      .status(200)
      .json({ status: true, message: "Contact created successfully" });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
};
