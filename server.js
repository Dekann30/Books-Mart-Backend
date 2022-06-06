// Dependencies
require('dotenv').config()
const {PORT = 3001, DATABASE_URL} = process.env

const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors')

const app = express()


// Database Connection
mongoose.connect(DATABASE_URL)

mongoose.connection
    .on('open', () => console.log('Mongoose'))
    .on('close', ()=> console.log('connection close'))
    .on('error', (error) => console.log(error))


// Middleware
app.use(cors())
app.use(express.json())
// Routes

// INDUCES

app.get("/", (req,res)=> {
    res.send("Hello Books")
})




// Listener
app.listen(PORT, () => console.log(`listening on ${PORT}`))