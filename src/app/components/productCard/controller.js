import ProductCardModel from "./model";
import ProductCardView from "./view";

class ProductCardController {
	constructor(data) {
		this.model = new ProductCardModel(data);
		this.view = new ProductCardView();

		this.model.subscribe('Transfer data to view', this.view.renderProductCard.bind(this.view));
	}
}

export default ProductCardController;