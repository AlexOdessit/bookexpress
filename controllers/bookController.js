const Book = require('../models/Book');

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();

  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne(id);
  return res.send(book);
};

module.exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.book);

  res.send(newBook);
};

module.exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  const deletedBook = await Book.delete(+id);

  res.send(deletedBook);
};

module.exports.updateBook = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedBook = await Book.update(+id, body);
  res.send(updatedBook);
};
