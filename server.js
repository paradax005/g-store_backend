const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000 

// Connect to MongoDB and Start Server 
mongoose
    .set({'strictQuery' : false})
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT , () => console.log(`Server is listen to port ${PORT}`))
    })
    .catch((err) => {
        console.log(err);
    })