const path = require('path')
const multer = require('multer');
var storage = multer.diskStorage({
  destination: (req,file,cb)
})