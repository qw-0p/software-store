import {
  Basket,
  BasketProduct,
  Exporter,
  Product,
  ProductInfo,
  Type,
  TypeProduct,
  User,
} from './models';

const init = () =>
  Promise.all([
    User.sync(),
    Basket.sync(),
    BasketProduct.sync(),
    Type.sync(),
    TypeProduct.sync(),
    Product.sync(),
    ProductInfo.sync(),
    Exporter.sync(),
  ]);

export default init;
