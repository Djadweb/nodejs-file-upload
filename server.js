const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()

app.use(fileUpload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.use('/static', express.static(__dirname))

app.post('/', (req, res) => {
    if(req.files) {
        console.log(req.files)      
        let file = req.files.file
        let filename = file.name
        console.log(filename)  

        file.mv('./uploads/'+filename, (error) => {
            if(error) {
                res.send(error)
            } else {
                res.send(filename+" Successfully uploaded check uploads folder!")
            }
        })
    }
})




app.listen(3000, console.log("Server launching in port 3000"))