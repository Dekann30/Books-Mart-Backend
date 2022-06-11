// Dependencies
const express = require ('express')
const cors = require('cors')

require('dotenv').config()
const app = express()

// Routers
const booksRouter = require('./Routes/books')
// const userRouter = require('')

// DB Config
require('./Config/database')

// Middleware
app.use(cors())
app.use(express.json())
app.use('/books', booksRouter)
// app.use('/user', userRouter)
// Routes

// Hello world route
app.get("/", (req,res)=> {
    res.send("Hello Books")
})


const {PORT = 3001} = process.env
// Listener
app.listen(PORT, () => console.log(`listening on ${PORT}`))
