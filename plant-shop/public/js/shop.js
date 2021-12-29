// Slider for baner
const swiperBaner = new Swiper('.swiper.c-baner-swiper', {
  speed: 900,
  loop: true,
	effect: 'fade',
  autoplay: {
    delay: 4000,
  },
});

let banerContainer = document.getElementById('js-baner');
const select = document.querySelector('.c-select');
let inputBtnShow;
let btnPrev;
let btnNext;
// Button for scroll page to shop
let btnScrollToShop = document.getElementById('js-get-shop');
// Scroll to shop
btnScrollToShop.addEventListener('click', () => {
	clientScroll(document.querySelector('.c-products'));
})
// Function for scroll
function clientScroll(elem) {
	let x = elem.offsetTop
	window.scrollTo({
		top: x,
		behavior: 'smooth',
	})
}

// Products array
let shopList = [
	{
		src: './assets/images/kaktus.jpg',
		alt: 'kaktus',
		title: 'Kaktus Plants',
		priceCash: 'UAH',
		price: '85.00',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur eius, nesciunt sit eum nisi, quibusdam laboriosam ex incidunt illum ut eaque? Hic ullam rerum officiis quasi tenetur suscipit sapiente dolorum. Pariatur quod, officiis tempore nemo nesciunt nam delectus non.'
	}, 
	{
		src: './assets/images/landak.jpg',
		alt: 'landak',
		title: 'Landak Plants',
		priceCash: 'UAH',
		price: '105.00',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur eius, nesciunt sit eum nisi, quibusdam laboriosam ex incidunt illum ut eaque? Hic ullam rerum officiis quasi tenetur suscipit sapiente dolorum. Pariatur quod, officiis tempore nemo nesciunt nam delectus non.'
	}, 
	{
		src: './assets/images/kecubung.jpg',
		alt: 'Nubung',
		title: 'Nubung Plants',
		priceCash: 'UAH',
		price: '90.00',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur eius, nesciunt sit eum nisi, quibusdam laboriosam ex incidunt illum ut eaque? Hic ullam rerum officiis quasi tenetur suscipit sapiente dolorum. Pariatur quod, officiis tempore nemo nesciunt nam delectus non.'
	}, 
	{
		src: './assets/images/kecubung-two.jpg',
		alt: 'Labung',
		title: 'Labung Plants',
		priceCash: 'UAH',
		price: '35.00',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur eius, nesciunt sit eum nisi, quibusdam laboriosam ex incidunt illum ut eaque? Hic ullam rerum officiis quasi tenetur suscipit sapiente dolorum. Pariatur quod, officiis tempore nemo nesciunt nam delectus non.'
	}, 
	{
		src: './assets/images/kecubung-three.jpg',
		alt: 'Bobung',
		title: 'Bobung Plants',
		priceCash: 'UAH',
		price: '50.00',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur eius, nesciunt sit eum nisi, quibusdam laboriosam ex incidunt illum ut eaque? Hic ullam rerum officiis quasi tenetur suscipit sapiente dolorum. Pariatur quod, officiis tempore nemo nesciunt nam delectus non.'
	}, 
]
// Slider function
let swiperProducts = () => {
	new Swiper('.swiper.c-products-list', {
			speed: 900,
			spaceBetween: 50,
			loop: true,
			slidesPerView: 'auto',
			autoplay: false,
			navigation: {
				nextEl: '.c-products-list__next',
				prevEl: '.c-products-list__prev',
			},
		});
} 

// Container for shop content
const divProducts = document.getElementById('js-product-list');
// Render HTML
let changeSwiper = (array) => {
	for (let i = 0; i < array.length; i++) {
		let product = array[i];
		divProducts.insertAdjacentHTML('afterbegin', `
		<div class="swiper-slide c-products-list__slide">
			<div class="c-products-list__slide__image">
				<img class="e-img" src=${product.src} alt=${product.alt}>
				<div class="c-products-list__slide__show">
					<input type="button" name="js-show" value="See More" class="e-input e-input--bgcolor">
				</div>
			</div>
			<div class="c-products-list__title">
				<h4 class="e-title">
					${product.title}
				</h4>
			</div>
			<div class="c-products-list__price">
				<span class="e-text">
					${product.priceCash}
				</span>
				<span class="e-text">
					${product.price}
				</span>
			</div>
		</div>
		`)
	}
	swiperProducts();
}
changeSwiper(shopList);
// Clear DOM for sort
function clearDOM(elem) {
	while(elem.firstChild) {
		elem.removeChild(elem.firstChild);
	}
}
inputBtnShow = document.getElementsByName('js-show');
// Sort products on change select`s options and render HTML
select.addEventListener('change', (e) => {
	clearDOM(divProducts)
	let elem = e.target;
	if (elem.value === 'cheaper') {
		shopList.sort(function(a, b) {
			return +b.price - +a.price;
		})
		changeSwiper(shopList);
		clickProductsItem();
	} else if (elem.value === 'expensive') {
		shopList.sort(function(a, b) {
			return +a.price - +b.price;
		})
		changeSwiper(shopList);
		clickProductsItem();
	} else if (elem.value === 'sort-a-z') {
		shopList.sort(function(a, b) {
			switch (true) {
				case b.title < a.title:
					return -1;
				case b.title > a.title:
					return 1;
				default: 
					return 0;
			}
		})
		changeSwiper(shopList);
		clickProductsItem();
	} else if (elem.value === 'sort-z-a') {
		shopList.sort(function(a, b) {
			switch (true) {
				case a.title < b.title:
					return -1;
				case a.title > b.title:
					return 1;
				default: 
					return 0;
			}
		})
		changeSwiper(shopList);
		clickProductsItem();
	}
})

// Click on products item
function clickProductsItem() {

	for (let i = 0; i < inputBtnShow.length; i++) {
		let element = inputBtnShow[i];
		element.addEventListener('click', () => {
			let slideContainer = element.closest('.c-products-list__slide').cloneNode(true);
			swiperBaner.destroy();
			clearDOM(banerContainer);
			let priceBlock = getShopData(shopList, 'alt', slideContainer.querySelector('.e-img').alt);
			renderContent(banerContainer, priceBlock);
			clientScroll(banerContainer);
			btnPrev = document.getElementById('js-shop-prev-btn');
			btnPrev.addEventListener('click', () => {
				prevBtn();
			})
			btnNext = document.getElementById('js-shop-next-btn');
			btnNext.addEventListener('click', () => {
				nextBtn();
			})
		})
	}
}

function prevBtn() {
	btnPrev = document.getElementById('js-shop-prev-btn');
	priceBlock = getShopData(shopList, 'title', btnPrev.querySelector('.e-title').innerText);
	clearDOM(banerContainer);
	renderContent(banerContainer, priceBlock);
	btnPrev = document.getElementById('js-shop-prev-btn');
	btnNext = document.getElementById('js-shop-next-btn');
	btnPrev.addEventListener('click', prevBtn)
	btnNext.addEventListener('click', nextBtn)
}
function nextBtn() {
	btnNext = document.getElementById('js-shop-next-btn');
	priceBlock = getShopData(shopList, 'title', btnNext.querySelector('.e-title').innerText);
	clearDOM(banerContainer);
	renderContent(banerContainer, priceBlock);
	btnNext = document.getElementById('js-shop-next-btn');
	btnPrev = document.getElementById('js-shop-prev-btn');
	btnNext.addEventListener('click', nextBtn)
	btnPrev.addEventListener('click', prevBtn)
}
// Show products in baner
clickProductsItem();
// Get element by shopList
function getShopData(array, key, elem) {
	for (let i = 0; i < array.length; i++) {
		let product = array[i];
		if (product[key] === elem) {
			if (i > 0 && i < array.length - 1) {
				let productPrev = array[i-1];
				let productNext = array[i+1];
				return {
							productPrev, 
							product, 
							productNext
						}
			} else if (i === 0) {
				let productPrev = array[array.length -1];
				let productNext = array[i+1];
				return {
							productPrev, 
							product, 
							productNext
						}
			} else if (i === array.length - 1) {
				let productPrev = array[i-1];
				let productNext = array[0];
				return {
							productPrev, 
							product, 
							productNext
						}
			}
			
		} 
	}
}
// Render content to BANER
function renderContent(elem, priceBlock) {
	elem.insertAdjacentHTML('afterbegin', `
		<div class="c-baner__wrapper">
			<div class="c-baner__image">
				<img src="${priceBlock.product.src}" alt="${priceBlock.product.alt}" class="e-img">
			</div>
			<div class="c-baner__content">
				<div class="c-baner__content__title">
					<h2 class="e-title e-title--baner">
						${priceBlock.product.title}
					</h2>
				</div>
				<div class="c-baner__content__text">
					<p class="e-paragraph">
						${priceBlock.product.content}
					</p>
				</div>
				<div class="c-baner__content__buy">
					<div class="c-text">
						<span class="c-button__text">
							${priceBlock.product.priceCash}
						</span>
						<span class="c-button__text">
							${priceBlock.product.price}
						</span>
					</div>
					<button id="js-buy" type="button" class="c-button c-button--bgcolor">
						<span class="c-button__text">
							BUY
						</span>
					</button>
				</div>
				<div class="c-baner__content__buttons">
					<div class="c-btn-baner" id="js-shop-prev-btn">
						<div class="c-btn-baner__road">
							<svg class="icon icon-back"><use xlink:href="#icon-back"></use></svg>
							<span>
								Prev
							</span>
						</div>
						<div class="c-btn-baner__title">
							<h4 class="e-title">
								${priceBlock.productNext.title}
							</h4>
						</div>
					</div>
					<div class="c-btn-baner" id="js-shop-next-btn">
						<div class="c-btn-baner__road">
							<span>
								Next
							</span>
							<svg class="icon icon-right"><use xlink:href="#icon-right"></use></svg>
						</div>
						<div class="c-btn-baner__title">
							<h4 class="e-title">
								${priceBlock.productPrev.title}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		`)
}


