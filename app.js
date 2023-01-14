const express = require("express")
const files = require("./routes/files")

global.__basedir = __dirname;
const app = express()

app.use('/files', files)
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(3000, () => {
    console.log("Server is running @3000")
})
