const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.json({ "data": "Helpy-Moto" })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))