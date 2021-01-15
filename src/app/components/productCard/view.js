import { EventEmitter } from "../../helpers/event-emmiter";

class ProductCardView extends EventEmitter {
	constructor() {
		super();
	}

	findElements(root) {
		this.cartHolder = root.querySelector('.cart-holder');
		this.quantityProducts = root.querySelector('.quantity-products');
		this.quantityField = root.querySelector('.quantity-field');
		this.phoneOrder = root.querySelector('.phone-order');
		this.thankHolder = root.querySelector('.thank-holder');

		this.phoneField = root.querySelector('.phone-order__field');
	}
	addListeners(root) {
		root.querySelector('.btn--add-to-cart').addEventListener('click', (evt) => {
			this.quantityProducts.textContent = this.quantityField.value;
			this.cartHolder.style.bottom = "0";
		});

		root.querySelector('.cart-holder__close .close-link').addEventListener('click', (evt) => {
			evt.preventDefault();
			this.cartHolder.style.bottom = "-100%";
		});

		root.querySelector('.cancel-link').addEventListener('click', (evt) => {
			evt.preventDefault();
			this.cartHolder.style.bottom = "-100%";
		});

		root.querySelector('.card__quantity').addEventListener('click', (evt) => {
			const step = +this.quantityField.step;
			if(evt.target.classList.contains('minus')) {
				this.quantityField.value > 1 ? this.quantityField.value -= step : null;
			}
			if(evt.target.classList.contains('plus')) {
				this.quantityField.value = +this.quantityField.value + step;
			}
		});

		root.querySelector('.oneclick-link').addEventListener('click', (evt) => {
			evt.preventDefault();
			this.phoneOrder.style.bottom = "0";
		});

		root.querySelector('.phone-order__close .close-link').addEventListener('click', (evt) => {
			evt.preventDefault();
			this.phoneOrder.style.bottom = "-100%";
		});

		root.querySelector('.thank-holder__close .close-link').addEventListener('click', (evt) => {
			evt.preventDefault();
			this.thankHolder.style.bottom = "-100%";

			setTimeout(() => {
				this.thankHolder.style.left = "-100%";
			}, 300);

			setTimeout(() => {
				this.thankHolder.style.bottom = "0";
			}, 600);
		});

		root.querySelector('.btn--buy').addEventListener('click', (evt) => {

			const phoneValue = this.phoneField.value;

			if(!phoneValue) {
				alert('Fill your phone number please!');
				return
			}

			this.phoneField.value = '';
			this.phoneOrder.style.left = "auto";
			this.phoneOrder.style.right = "-100%";

			this.thankHolder.style.left = "0";

			setTimeout(() => {
				this.phoneOrder.style.bottom = "-100%";
			}, 300);

			setTimeout(() => {
				this.phoneOrder.style.right = "0";
				this.phoneOrder.style.left = "0";
			}, 600);
			
		});
	}

	renderProductCard(data) {
		const root = document.querySelector('.products');
		root.insertAdjacentHTML('beforeend', `
		<div id="${data.id}" class="card">
    <div class="card__thumb">
      <img src="${data.image}" alt="">
    </div>
    <h3 class="card__title">${data.title}</h3>
    <div class="card__footer-top">
      <div class="card__quantity">
        <span class="minus">-</span>
        <input class="quantity-field" type="number" value="1" step="4">
        <span class="plus">+</span>
      </div>
      <div class="card__price">${data.price} <span class="currency">₽</span></div>
    </div>
    <div class="card__footer-bottom">
      <a href="#" class="oneclick-link">Купить в 1 клик</a>
      <button class="btn btn--add-to-cart">В корзину</button>
    </div>

    <div class="cart-holder">
      <div class="cart-holder__close">
        <a href="#" class="close-link">×</a>
      </div>
      <div class="cart-holder__icon">
        <img src="./images/thumb-icon.png" alt="">
      </div>
      <div class="cart-holder__title">
        Товар добавлен в корзину
      </div>
      <div class="cart-holder__table">
        <table>
          <tbody>
            <tr>
              <td>${data.title}</td>
              <td><span class="quantity-products">1</span> x ${data.price} ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart-holder__footer">
        <a href="#" class="cancel-link">Отменить</a>
        <button class="btn btn--outline">Перейти в корзину</button>
      </div>
		</div>
		<div class="phone-order">
      <div class="phone-order__close">
        <a href="#" class="close-link">×</a>
      </div>
      <div class="phone-order__title">
        Оформите покупку<br>по телефону:
      </div>
      <div class="phone-order__number">
        <label>Номер телефона:
          <input class="phone-order__field" type="text">  
          <span class="decorator"></span> 
        </label>          
      </div>
      <div class="phone-order__footer">
        <div class="price">${data.price} ₽</div>
        <button class="btn btn--outline btn--buy">Купить</button>
      </div>      
		</div>
		<div class="thank-holder">
      <div class="thank-holder__close">
        <a href="#" class="close-link">×</a>
      </div>
      <div class="thank-holder__icon">
        <img src="./images/thumb-icon.png" alt="">
      </div>
      <div class="thank-holder__title">
        Спасибо! Ожидайте звонка, наши менеджеры свяжутся с вами в ближайшее время.
      </div>      
    </div>
  </div>
		`);

		this.findElements(root.lastElementChild);
		this.addListeners(root.lastElementChild);
	}
}

export default ProductCardView;