const app = require('./app')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 5000
const MONGODB_URI = 'mongodb://localhost:27017/todoApp'

mongoose.connect(MONGODB_URI).then(() => console.log('MongoDB Connected')).catch((err) => console.log("Error", err))

app.listen(PORT, () => {
    console.log('Server is Running')
})