let books = [
  {
    id: 0,
    name: 'Advanced JS',
    author: 'Alex',
    description: 'Vanila JS,Angular,Typescript...',
    pageNum: 20,
    price: 100,
    inStock: true,
  },
];

class Book {
  static async create(bookData) {
    const newBook = { id: books.length, ...bookData };
    books.push(newBook);
    return newBook;
  }

  static async findOne(id) {
    return books.find((book) => book.id === id);
  }

  static async findAll() {
    return books;
  }

  static async update(id, newBookData) {
    books = books.map((book) => {
      if (book.id !== id) {
        return book;
      }
      const updateBook = { ...book, ...newBookData };
      return updateBook;
    });
    const updateBook = await Book.findOne(id);
    return updateBook;
  }

  static async delete(id) {
    const deletedBook = await Book.findOne(id);
    books = books.filter((book) => book.id !== id);
    return deletedBook;
  }
}

module.exports = Book;
