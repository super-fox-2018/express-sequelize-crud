exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.showErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status !== 404) err.message = 'Internal Server Error';
  console.log(err);
  res.render('error', {
    title: err.message,
    message: err.message,
    status: err.status || 500
  });
};