const express = require("express")
const multer = require("multer")

const router = express.Router()
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + `-${Date.now()}.jpg`)
        }
    })
}).single("file-upload")


router.post('/upload', upload, (req, res) => {
    res.send("file received")
})


module.exports = router