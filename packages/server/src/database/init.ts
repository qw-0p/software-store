import {
	Basket,
	BasketProduct,
	Exporter,
	Product,
	ProductInfo,
	Type,
	User,
} from './models'
import './models/associations'

const init = () =>
	Promise.all([
		User.sync(),
		Basket.sync(),
		BasketProduct.sync(),
		Type.sync(),
		Product.sync(),
		ProductInfo.sync(),
		Exporter.sync(),
	])

export default init
