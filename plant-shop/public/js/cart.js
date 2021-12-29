const cartBtn = document.getElementById('js-shop-cart');
const cartResultBtn = document.getElementById('js-go');
const cartWrapper = document.querySelector('.c-cart__wrapper');
let btnDisabled = (elem, boolean) => {
	if (boolean) {
		elem.disabled = true;
		elem.classList.remove('e-input--active');
	} else {
		elem.disabled = false;
		elem.classList.add('e-input--active');
	}
}

// let counter = () => {
// 		let cartContent = document.querySelectorAll('.c-cart__save');
// 		for (let i = 0; i < cartContent.length; i++) {
// 			let btnMinus = document.getElementById(`js-minus${i}`);
// 			let btnPlus = document.getElementById(`js-plus${i}`);
// 			let count = 1;
// 			let countList = document.querySelectorAll('.c-cart__content__buttons');
// 			countList = Array.from(countList).reverse()
// 			let countRender = countList[i].querySelector('.e-text');
// 			countRender.textContent = count;
// 			let priceList = document.querySelectorAll('.c-cart__content__sum__text');
// 			priceList = Array.from(priceList).reverse();
// 			let priceContent = priceList[i];
// 			let priceString = priceContent.textContent.replace(/\t/g, '');
// 			let priceText = priceString.replace(/[^a-z]/gi, '');
// 			let priceNumber = priceString.replace(priceText, '');
// 			priceNumber = parseFloat(priceNumber.replace(/\./, '.')).toFixed(2)
// 			btnPlus.addEventListener('click', () => {
// 				count++;
// 				countRender.textContent = count;
// 				priceContent.textContent = priceText + ' ' + ((priceNumber * count).toFixed(2));
// 				if (count > 1) {
// 					btnDisabled(btnMinus, false);
// 				}			
// 			})
// 			btnMinus.addEventListener('click', () => {
// 				if (count > 2) {
// 					count--;
// 					countRender.textContent = count;
// 					priceContent.textContent = priceText + ' ' + ((priceNumber * count).toFixed(2));
// 				} else {
// 					count--;
// 					countRender.textContent = count;
// 					priceContent.textContent = priceText + ' ' + priceNumber;
// 					btnDisabled(btnMinus, true);
// 				}
// 			})
// 		}
// }
let createContent = () => {
	let textInfo = document.createElement('p');
	textInfo.classList.add('c-cart__empty')
	textInfo.textContent = 'Cart is empty';
	textInfo.setAttribute('style', `margin-bottom: 20px; font-size: 20px`);
	return textInfo;
}

cartBtn.addEventListener('click', () => {
	if (document.querySelector('.c-cart__image')) {
		if (cartWrapper.querySelector('.c-cart__empty')) {
			cartWrapper.querySelector('.c-cart__empty').remove()
		}
		// counter();
	} else if (!cartWrapper.querySelector('.c-cart__empty')) {
		cartWrapper.prepend(createContent());
		btnDisabled(cartResultBtn, false);
	}
});



// function createCartContent(cartArray) {
// 	let buyElem = document.querySelector('.c-baner__wrapper').cloneNode(true);
// 	let textPrice = buyElem.querySelector('.c-text').querySelectorAll('.c-button__text');
// 	let textPriceCart = '';
// 	let divCartSave = document.createElement('div')
// 	divCartSave.classList.add('c-cart__save');
// 	divCartSave.insertAdjacentHTML('afterbegin', `
// 		<div class="c-cart__image">
// 		</div>
// 		<div class="c-cart__content">
// 			<div class="c-cart__content__title"></div>
// 			<div class="c-cart__content__buttons">
// 				<input type="button" value="-", class="e-input--cart js-minus"/>
// 				<span class="e-text"></span>
// 				<input type="button" value="+", class="e-input--cart e-input--active js-plus"/>
// 			</div>
// 			<div class="c-cart__content__sum">
// 				<span class="c-cart__content__sum__text"></span>
// 			</div>
// 		</div>
// 	`)
// 	let cartContainer = document.querySelector('.c-cart__wrapper');
// 	for(let i = 0; i < textPrice.length; i++) {
// 		textPriceCart += textPrice[i].textContent;
// 	}
// 	textPriceCart = textPriceCart.replace(/\n/g, '');
// 	divCartSave.querySelector('.c-cart__image').append(buyElem.querySelector('.e-img'));
// 	divCartSave.querySelector('.c-cart__content__title').append(buyElem.querySelector('.e-title'));
// 	divCartSave.querySelector('.c-cart__content__sum__text').prepend(textPriceCart);
// 	cartArray.push(divCartSave);
	
// 	for (let i = 0; i < cartArray.length; i++) {
// 		let plusElem = cartArray[i].outerHTML.querySelector('.js-plus');
// 		let minusElem = cartArray[i].querySelector('.js-minus');
// 		plusElem.setAttribute('id', `js-plus${i}`);
// 		minusElem.setAttribute('id', `js-minus${i}`);
// 		cartContainer.prepend(cartArray[i]);
// 		localStorage.setItem(`productsArray${i}`, cartArray[i].outerHTML);
// 	}
	
// }


// function renderCart(buyBtn) {
// 	// Buy button
// 	buyBtn.addEventListener('click', () => {
// 		createCartContent(cartArray);
// 	})
// }
