const express = require("express")
const multer = require("multer")
const fs = require("fs/promises")
const base_dir = require("../assets")

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

router.get('/', (req, res) => {
    const open = async () => {
        try {
            const dir = await fs.opendir('./uploads/');
            res.write("The files are:- ")
            for await (const dirent of dir)
                res.write(dirent.name);

            res.end()
        } catch (err) {
            console.error(err);
        }
    }
    open()
})
router.get('/:id', (req, res) => {
    res.sendFile(`${base_dir}/uploads/${req.params.id}`)
})

router.post('/upload', upload, (req, res) => {
    res.send("file received")
})


module.exports = router