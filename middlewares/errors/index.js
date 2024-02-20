module.exports.basicErrorMW = async (err, req, res, next) => {
  res.send(`Error: ${err}`);
};
