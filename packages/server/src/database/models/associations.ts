import {
  User,
  Basket,
  BasketProduct,
  Type,
  TypeProduct as TypeBrand,
  Rating,
  Product,
  Exporter,
  ProductInfo,
} from '.';

User.hasOne(Basket);
Basket.belongsTo(User);

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

Type.belongsToMany(Exporter, { through: TypeBrand });
Exporter.belongsToMany(Type, { through: TypeBrand });
