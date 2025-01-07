import {
  Basket,
  BasketProduct,
  Company,
  Product,
  ProductInfo,
  Type,
  TypeProduct,
  User,
  Rating,
} from './models';

const init = async () => {
  try {
    console.time();
    await User.sync();
    console.log('===> USERS table synchronized successfully. <===');
    await Company.sync();
    console.log('===> COMPANIES table synchronized successfully. <===');
    await Type.sync();
    console.log('===> TYPES table synchronized successfully. <===');
    await Product.sync();
    console.log('===> PRODUCTS table synchronized successfully. <===');
    await Basket.sync();
    console.log('===> BASKETS table synchronized successfully. <===');
    await TypeProduct.sync();
    console.log('===> TYPE_PRODUCT table synchronized successfully. <===');
    await BasketProduct.sync();
    console.log('===> BASKET_PRODUCT table synchronized successfully. <===');
    await ProductInfo.sync();
    console.log('===> PRODUCT_INFO table synchronized successfully. <===');
    await Rating.sync();
    console.log('===> RATING table synchronized successfully. <===');
    console.log('All tables synchronized successfully.');
    console.timeEnd();
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
};

export default init;
