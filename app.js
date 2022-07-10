const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.static('public'))
const MongoDB_connection_string = process.env.MONGODB_CONNECTION_STRING_URI
mongoose.connect(MongoDB_connection_string, {
    useNewUrlParser: true,
    xuseUnifiedTopology: true
}).then(() => { console.warn("db connection done") })


app.get('/api', (req, res) => {
    console.log(process.env.MONGODB_CONNECTION_STRING_URI)
    let temp = process.env
    res.json(temp)
})

app.get('/upload/image', (req, res) => {

})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))