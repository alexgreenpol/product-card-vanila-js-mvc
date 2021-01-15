const { default: ProductCardController } = require("./controller");

class InitProductCard {
	constructor(data) {
		this.controller = new ProductCardController(data);
	} 
}

export default InitProductCard;