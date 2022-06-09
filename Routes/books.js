const express = require('express')
const router = express.Router()
const booksController = require('../Controllers/books')

router.get('/', booksController.index)

router.post('/', booksController.create)





module.exports = router