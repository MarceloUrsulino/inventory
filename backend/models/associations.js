const category = require('./category')
const product = require('./product')

category.hasMany(product, {foreignKey: 'categoryId'})
product.belongsTo(category, {foreignKey: 'categoryId'})