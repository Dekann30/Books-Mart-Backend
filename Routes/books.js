const express = require('express')
const router = express.Router()
const booksController = require('../Controllers/books')

router.get('/', booksController.index)





module.exports = router