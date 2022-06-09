const express = require('express')
const router = express.Router()
const booksController = require('../Controllers/books')

router.get('/', booksController.index)

router.post('/', booksController.create)

router.delete('/:id', booksController.del)



module.exports = router