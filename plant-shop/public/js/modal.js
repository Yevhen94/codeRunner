
// Link button-trigger registration
const modalLinkReg = document.getElementById('js-btn-registration');
// Link button-trigger login
const modalLinkLog = document.getElementById('js-btn-login');
// Link button-trigger cart 
const modalLinkCart = document.getElementById('js-shop-cart');
// Modal registration
const modalReg = document.querySelector('.c-registration');
// Modal login
const modalLogin = document.querySelector('.c-login');
// Modal cart
const modalCart = document.querySelector('.c-cart');
// Close registration modal
const modalRegClose = document.getElementById('js-reg-close');
// Close login modal
const modalLogClose = document.getElementById('js-login-close');
// Close cart modal
const modalCartClose = document.getElementById('js-cart-close');
// Button form registration
const bntSubmitReg = document.getElementById('js-reg-btn');
// Text error field in registration form
const regError = document.getElementById('js-text-error');
// Get input type email
const email = document.getElementById('js-email');
// Get input type password
const password = document.getElementById('js-password');
const confirmPassword = document.getElementById('js-confirm-password');
// First name
const firstName = document.getElementById('js-first-name');
// Last name
const lastName = document.getElementById('js-last-name');

function modalOpen(modalName) {
	document.body.style.overflow='hidden';
  modalName.classList.add('open');
}

function modalClose(modalName) {
	document.body.style.overflow='auto';
  modalName.classList.remove('open');
}

// Change bgcolor button registration and open modal
modalLinkReg.addEventListener('mousemove', () => {
	modalLinkReg.classList.add('c-button--bgcolor');
	modalLinkLog.classList.remove('c-button--bgcolor');
	modalLinkReg.classList.remove('c-button--color');
	modalLinkLog.classList.add('c-button--color');
	modalLinkReg.addEventListener('click', () => {
		modalOpen(modalReg);
	})
});
// Open cart modal
modalLinkCart.addEventListener('click', () => {
	modalOpen(modalCart);
})
// Close cart modal
modalCartClose.addEventListener('click', () => {
	modalClose(modalCart);
})

// Close modal registration
modalRegClose.addEventListener('click', () => {
	modalClose(modalReg);
})
// Change bgcolor button login and open modal
modalLinkLog.addEventListener('mousemove', () => {
	modalLinkLog.classList.add('c-button--bgcolor');
	modalLinkReg.classList.remove('c-button--bgcolor');
	modalLinkLog.classList.remove('c-button--color');
	modalLinkReg.classList.add('c-button--color');
	modalLinkLog.addEventListener('click', () => {
	modalOpen(modalLogin);
	});
});

// Close modal login
modalLogClose.addEventListener('click', () => {
	modalClose(modalLogin);
});

// close on ESC
document.addEventListener('keydown', (e) => {
	if (e.keyCode === 27) {
		let modalActive = document.querySelector('.open');
		modalClose(modalActive);
	}
});

// Close modal on dark bg
let closeDarkBg = (elem) => {
	elem.addEventListener("click", function(e) {
		if (!e.target.closest(".js-modal")) {
			modalClose(e.target.closest(".open"));
		}
	});
}

closeDarkBg(modalReg);
closeDarkBg(modalLogin);
closeDarkBg(modalCart);
class Users {
	regulSymbols = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  valid = this.regulSymbols.test(this.email);
	passwordError = 'The passwords don`t match. Please enter correct password';
	emailError = 'Incorrect email. Please try again';
	constructor(firstName, lastName, password, confirmPassword, email) {
		this.confirmPassword = confirmPassword.value;
		this.firstName = firstName.value;
		this.lastName = lastName.value;
		this.password = password.value;
		this.email = email.value;
	}

	get userData() {
    if (this.password === this.confirmPassword) {
      if (this.valid) {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        }
      } else {
        return this.emailError;
      }
    } else {
      return this.passwordError;
    }
  }

	get userEmail() {

	}
}
// Validation registration form
bntSubmitReg.disabled = false;
bntSubmitReg.addEventListener('click', (e) => {
	e.preventDefault();
	let user = new Users(firstName, lastName, password, confirmPassword, email);
	email.classList.remove('e-input--error');
  confirmPassword.classList.remove('e-input--error');
  regError.classList.remove('js-green');
  regError.innerHTML = '';
	if (user.userData === user.passwordError) {
    regError.innerHTML = user.passwordError
    confirmPassword.classList.add('e-input--error');
  } else if (user.userData === user.emailError) {
    regError.innerHTML = user.emailError;
    email.classList.add('e-input--error');
  }
})
