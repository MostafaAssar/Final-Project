const path = require("path");
const multer = require("multer");

//photo storge المكان الي هخزن فيه الصوره

const photoSorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, file.originalname);
    } else {
      cb(null, false);
    }
  },
});

//photo update middelwire
const photoUpdate = multer({
  storage: photoSorage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb({ message: "it is not a photo or unsuppoted formate" }, false);
    }
  },
});
module.exports = photoUpdate;