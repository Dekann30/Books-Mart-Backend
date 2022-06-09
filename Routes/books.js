const express = require('express')
const router = express.Router()
const booksController = require('../Controllers/books')

router.get('/', booksController.index)

router.delete('/:id', booksController.del)

router.put('/:id', booksController.update)

router.post('/', booksController.create)

router.get('/:id', booksController.show)





module.exports = router