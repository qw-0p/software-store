'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorHandler = void 0;
var CustomError_1 = require('@errors/CustomError');
var errorHandler = function (err, req, res, next) {
  if (err instanceof CustomError_1.CustomError) {
    var statusCode = err.statusCode,
      errors = err.errors,
      logging = err.logging;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2,
        ),
      );
    }
    return res.status(statusCode).send({ errors: errors });
  }
  console.error(JSON.stringify(err, null, 2));
  return res
    .status(500)
    .send({ errors: [{ message: 'Something went wrong' }] });
};
exports.errorHandler = errorHandler;
