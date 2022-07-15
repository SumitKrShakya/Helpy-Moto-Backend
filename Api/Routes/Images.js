const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static('public'))
const multer = require('multer')
const imageModel = require('../Models/imagesSchema')
const { default: mongoose } = require('mongoose')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const fs = require('fs')



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })



router.post('/', (req, res) => {
    res.send('welcome to images Api you can upload or download or update images here')
})

router.post('/upload', upload.single('productImage'), (req, res, next) => {

    let img = fs.readFileSync(req.file.path)
    let encodedImage = img.toString('base64')

    const newImage = new imageModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        page: req.body.page,
        encodedImage: encodedImage

    })
    newImage.save()
        .then(() => res.send('successfully uploaded'))
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})

router.post('/find', jsonParser, (req, res) => {
    console.log(req.body)
    res.send('working')
})


router.post('/query', jsonParser, (req, res) => {
    console.log(req.body.query)
    imageModel.find(req.body.query)
        .then((data) => {
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})


module.exports = router;