const express = require("express")
const files = require("./routes/files")

global.__basedir = __dirname;
const app = express()

app.use('/files', files)
app.get('/', (req, res) => {
    res.write("<h1>Welcome to File System CRUD API</h1>")
    res.send`<h3>For details about the endpoints - <a href="https://github.com/nandcoder/fs-crud"> Read the Docs </a> </h3>`)
})

app.listen(3000, () => {
    console.log("Server is running @3000")
})
