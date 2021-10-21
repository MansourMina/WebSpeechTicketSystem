/* eslint no-unused-vars: off */

const errorHandler = (err, req, res, next) => {
  //
  if (err) console.log(err.message.red.inverse);
  else next();
};

const notFound = (req, res) => {
  //
  console.log(`Not Found ====> ${req.originalUrl.blue}`);
  res.status(404).json({
    data: 'Server Error',
    code: 404,
  });
};

module.exports = { errorHandler, notFound };
