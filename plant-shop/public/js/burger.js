const burger = document.getElementById('js-btn-menu');
let headerBtn = document.querySelector('.c-header__buttons');
let closeIcon = document.getElementById('js-burger-close');

burger.addEventListener('click', () => {
	headerBtn.classList.add('c-header__buttons--active');
})

closeIcon.addEventListener('click', () => {
	headerBtn.classList.remove('c-header__buttons--active');
})

	
function resizeWindow() {
	if (document.documentElement.clientWidth <= 750) {
		document.querySelector('.c-header__logo').after(document.querySelector('.c-header__resize'));
		document.querySelector('.c-header__buttons').append(document.querySelector('.c-header__lang'));
	} else {
		document.querySelector('.c-header__buttons').prepend(document.querySelector('.c-header__lang'));
		document.querySelector('.c-header__buttons').prepend(document.querySelector('.c-header__resize'))
	}
}
resizeWindow();
window.addEventListener('resize', resizeWindow);