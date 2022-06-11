const mongoose = require ('mongoose')

const BooksSchema = new mongoose.Schema ({
    title: String,
    description: String,
    author: String,
    genre: String,
    price: Number
})
const Books = mongoose.model ('Books', BooksSchema)
module.exports = Books