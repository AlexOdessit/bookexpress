const yup = require('yup');

module.exports.BOOK_VALIDATION = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
});
