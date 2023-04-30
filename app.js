require('dotenv').config()
const express = require('express')
const mahasiswaRoutes = require('./router/mahasiswa')
const { METHODS } = require('http')

const app = express()

app.use('/', (req, res, next) => {
    console.log(req.url)
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/mahasiswa', mahasiswaRoutes)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})