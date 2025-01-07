import {
  User,
  Basket,
  BasketProduct,
  Type,
  TypeProduct,
  Rating,
  Product,
  Company,
  ProductInfo,
} from '.';

User.hasMany(Company, { foreignKey: 'creator_id', sourceKey: 'id' });
Company.belongsTo(User, { foreignKey: 'creator_id', targetKey: 'id' });

User.hasOne(Basket, { foreignKey: 'user_id', sourceKey: 'id' });
Basket.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

User.hasMany(Type, { foreignKey: 'owner_id', sourceKey: 'id' });
Type.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

User.hasMany(Product, { foreignKey: 'owner_id', sourceKey: 'id' });
Product.belongsTo(User, { foreignKey: 'owner_id', targetKey: 'id' });

Type.hasMany(Product, { foreignKey: 'type_id', sourceKey: 'id' });
Product.belongsTo(Type, { foreignKey: 'type_id', targetKey: 'id' });

Company.hasMany(Product, { foreignKey: 'company_id', sourceKey: 'id' });
Product.belongsTo(Company, { foreignKey: 'company_id', targetKey: 'id' });

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: 'info' });
ProductInfo.belongsTo(Product);

Type.belongsToMany(Company, { through: TypeProduct });
Company.belongsToMany(Type, { through: TypeProduct });
