// Dependencies
require('dotenv').config()
const {PORT = 3001, DATABASE_URL} = process.env

const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const Books = require('./Models/Books')

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

// CRUD

app.get("/", (req,res)=> {
    res.send("Hello Books")
})

app.post ("/books/create", async (req,res) => {
    try {
        res.json(await Books.create(req.body))
    }catch (err){
        res.status(400).json(err)
    }
})



// Listener
app.listen(PORT, () => console.log(`listening on ${PORT}`))