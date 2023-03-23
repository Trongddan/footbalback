const path = require("path");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/upload/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, callBack) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
      callBack(null, true);
    } else {
      console.log("only jpg or png");
      callBack(null, false);
    }
  },
});
module.exports = upload;
