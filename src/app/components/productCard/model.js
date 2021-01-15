import { EventEmitter } from "../../helpers/event-emmiter";

class ProductCardModel extends EventEmitter {
	constructor(data) {
		super();
		this.transferDataToView(data);
	}

	transferDataToView(data) {
		setTimeout(() => {
			this.emit('Transfer data to view', data);
		}, 0)
	}
}

export default ProductCardModel;