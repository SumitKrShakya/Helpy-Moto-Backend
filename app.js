const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.static('public'))

const imagesRouter = require('./Api/Routes/Images')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.warn("db connection done") })

app.use('/images/', imagesRouter)

app.post('/', (req, res, next) => {
    res.send('Home Page')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))