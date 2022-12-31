const express = require("express")
const files = require("./routes/files")

const app = express()

app.use('/files', files)
app.get('/', (req, res) => {
    res.send("<h1>Welcome to File System CRUD API</h1>")
})

app.listen(3000, () => {
    console.log("Server is running @3000")
})