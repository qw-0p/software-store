'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var models_1 = require('./models');
var init = function () {
  return Promise.all([
    models_1.User.sync(),
    models_1.Basket.sync(),
    models_1.BasketProduct.sync(),
    models_1.Type.sync(),
    models_1.TypeProduct.sync(),
    models_1.Product.sync(),
    models_1.ProductInfo.sync(),
    models_1.Exporter.sync(),
  ]);
};
exports.default = init;
