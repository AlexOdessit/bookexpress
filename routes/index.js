const express = require('express');
const router = express.Router();

const bodyParserMiddleware = express.json();

const { validateCreateBookMW } = require('../middlewares/book.mw');
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook,
} = require('../controllers/bookController');

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', bodyParserMiddleware, validateCreateBookMW, createBook);
router.put('/books/:id', bodyParserMiddleware, updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
