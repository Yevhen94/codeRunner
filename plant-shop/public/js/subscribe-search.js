// Button search in header
const searchBtn = document.getElementById('js-btn-search');
// Button subscribe in subscribe block
const subscribeBtn = document.getElementById('js-subscribe-btn');
// Search input in header
const searchInput = document.getElementById('js-input-search');
// Subscribe input
const subscribeInput = document.getElementById('js-subscribe');
const subInputWrapper = document.querySelector('.c-subscribe__input');
const searchWrapper = document.querySelector('.c-search__wrapper');
// Subscribe error block
const subErorr = document.getElementById('js-subscribe-error');



// Function for visible elements input
let fieldVisible = (elem1, elem2, boolean) => {
	if (boolean === true) {
		elem1.classList.add('c-search__wrapper--active');
		elem2.setAttribute('style', 'display:block');
	} else {
		elem1.classList.remove('c-search__wrapper--active');
		elem2.removeAttribute('style');
	}
}
// Visible input search
searchWrapper.addEventListener('mouseover', () => {
	fieldVisible(searchWrapper, searchInput, true);
	searchWrapper.addEventListener('mouseout', () => {
		fieldVisible(searchWrapper, searchInput, false);
	})
})
// Visible and validation subscribe
subInputWrapper.addEventListener('mouseover', (e) => {
	fieldVisible(subInputWrapper, subscribeInput, true);
	subscribeBtn.addEventListener('click', () => {
		let email = subscribeInput.value;
		let regulSymbols = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
		let valid = regulSymbols.test(email);
		subErorr.innerHTML = '';
		subInputWrapper.classList.remove('e-input--error');
		if (!valid) {
			subErorr.innerHTML = 'Invalid email. Please, repeat enter!';
			subInputWrapper.classList.add('e-input--error');
		}
	})
	subInputWrapper.addEventListener('mouseout', () => {
		fieldVisible(subInputWrapper, subscribeInput, false);
		subInputWrapper.classList.remove('e-input--error');
	})
})



