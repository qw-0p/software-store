import {
  Basket,
  BasketProduct,
  Company,
  Product,
  ProductInfo,
  Category,
  TypeProduct,
  User,
  Rating,
} from './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';

const init = async () => {
  try {
    console.time();
    await User.sync({ alter: isDev || isTest });
    console.log('===> USERS table synchronized successfully. <===');
    await Company.sync({ alter: isDev || isTest });
    console.log('===> COMPANIES table synchronized successfully. <===');
    await Category.sync({ alter: isDev || isTest });
    console.log('===> CATEGORY table synchronized successfully. <===');
    await Product.sync({ alter: isDev || isTest });
    console.log('===> PRODUCTS table synchronized successfully. <===');
    await Basket.sync({ alter: isDev || isTest });
    console.log('===> BASKETS table synchronized successfully. <===');
    await TypeProduct.sync({ alter: isDev || isTest });
    console.log('===> TYPE_PRODUCT table synchronized successfully. <===');
    await BasketProduct.sync({ alter: isDev || isTest });
    console.log('===> BASKET_PRODUCT table synchronized successfully. <===');
    await ProductInfo.sync({ alter: isDev || isTest });
    console.log('===> PRODUCT_INFO table synchronized successfully. <===');
    await Rating.sync({ alter: isDev || isTest });
    console.log('===> RATING table synchronized successfully. <===');
    console.log('All tables synchronized successfully.');
    console.timeEnd();
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
};

export default init;
