const header = document.querySelector('.c-header');
let positionElem = document.querySelector('.c-main').offsetTop;

window.addEventListener('scroll', () => {
	if (pageYOffset >= 10) {
		header.classList.add('c-header--scroll');
	} else {
		header.classList.remove('c-header--scroll');
	}
})