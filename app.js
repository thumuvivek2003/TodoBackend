const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes.js')

const app = express()

//Middle ware
app.use(express.json())
app.use(cors())


//Routes
app.use('/api', todoRoutes)

module.exports = app