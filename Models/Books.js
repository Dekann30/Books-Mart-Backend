const mongoose = require ('mongoose')

const BooksSchema = new mongoose.Schema ({
    title: { type: String, required:true, unique: true},
    description: { type: String, required:true},
    author: {type: String,required:true},
    genre: {type: String,required:true},
    price: Number
})
const Books = mongoose.model ('Books', BooksSchema)
module.exports = Books