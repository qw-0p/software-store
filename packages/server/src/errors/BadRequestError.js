'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null',
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
var CustomError_1 = require('./CustomError');
var BadRequestError = /** @class */ (function (_super) {
  __extends(BadRequestError, _super);
  function BadRequestError(params) {
    var _this = this;
    var _a = params || {},
      code = _a.code,
      message = _a.message,
      logging = _a.logging;
    _this = _super.call(this, message || 'Bad request') || this;
    _this._code = code || BadRequestError._statusCode;
    _this._logging = logging || false;
    _this._context =
      (params === null || params === void 0 ? void 0 : params.context) || {};
    Object.setPrototypeOf(_this, BadRequestError.prototype);
    return _this;
  }
  Object.defineProperty(BadRequestError.prototype, 'errors', {
    get: function () {
      return [{ message: this.message, context: this._context }];
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(BadRequestError.prototype, 'statusCode', {
    get: function () {
      return this._code;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(BadRequestError.prototype, 'logging', {
    get: function () {
      return this._logging;
    },
    enumerable: false,
    configurable: true,
  });
  BadRequestError._statusCode = 400;
  return BadRequestError;
})(CustomError_1.CustomError);
exports.default = BadRequestError;
