// For all routes which return promise
// This middleware will catch the errors
// And pass them to next middleware
exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// If no route is found create new Error as not found
// give status 404 and pass to next middleware
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

// In this middleware all errors will be showed to user
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