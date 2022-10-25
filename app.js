const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()

const Createmodel = require('./models/file.model')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded( { extended : false } ))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('file')
})

// Multer use for File Data store and Send
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads')
    },
    filename : (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname
        cb(null, name)
    }
})
const upload = multer({ storage : storage })


app.post('/', upload.single('file'), async (req, res) => {
    try{
        const newData = new Createmodel({
            username : req.body.username,
            file : req.file.filename
        })
        await newData.save()
        res.status(300).send(newData)
    } catch (err) {
        res.status(404).send("File is not uploaded")
    }
})


module.exports = app