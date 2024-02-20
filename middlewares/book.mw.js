const { BOOK_VALIDATION } = require('../validation/bookValidation ');

module.exports.validateCreateBookMW = async (req, res, next) => {
  try {
    const validateBook = await BOOK_VALIDATION.validate(req.body);

    req.book = validateBook;
    next();
  } catch (err) {
    next(err.message);
  }
};
