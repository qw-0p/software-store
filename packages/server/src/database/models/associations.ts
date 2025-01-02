import {
  User,
  Basket,
  BasketProduct,
  Type,
  TypeProduct,
  Rating,
  Product,
  Exporter,
  ProductInfo,
} from '.';

User.hasOne(Basket, { foreignKey: 'userId', sourceKey: 'id' });
Basket.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Type);

Exporter.hasMany(Product);
Product.belongsTo(Exporter);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product);

Type.belongsToMany(Exporter, { through: TypeProduct });
Exporter.belongsToMany(Type, { through: TypeProduct });
