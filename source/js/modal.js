const popup = document.querySelector('.pop-up');
const buttonsShow = document.querySelectorAll('.button-show');
const buttonHide = document.querySelector('.button-hide');
const form = popup.querySelector('.pop-up__form');
const pnoneInput = form.querySelector('#pnone-input');
const popupFormSubmitButton = form.querySelector('[type="submit"]');
const container = popup.querySelector('.pop-up__container');
const successPopupTemplate = document.querySelector('#success-message').content.querySelector('.success-message');

buttonsShow.forEach((buttonShow) => {
  buttonShow.addEventListener("click", function() {
        popup.classList.add('pop-up--open');
        pnoneInput.focus();
    })
  });

buttonHide.addEventListener('click', function() {
  popup.classList.remove('pop-up--open');
  document.removeEventListener('keydown', onClosePopup);
  });

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('pop-up--open');
    lastFocus.focus();
  }
});

const changePopupContent = () => {
  container.textContent = '';
  const clone = successPopupTemplate.cloneNode(true);
  container.appendChild(clone);
}

const showSuccesMessage = (evt) => {
  evt.preventDefault();
  changePopupContent();
}

popupFormSubmitButton.addEventListener('click', showSuccesMessage);


// const formPopupTemplate = document.querySelector('#form-popup').content.querySelector('.modal');
//

// const buyButtons = document.querySelectorAll('.buy-tour');
// const formPopupTemplate = document.querySelector('#form-popup').content.querySelector('.modal');
// const successPopupTemplate = document.querySelector('#success-message').content.querySelector('.success-message');

// const isPopupForm = () => document.querySelector('.modal');

// const onClosePopup = (evt) => {
//   const popup = document.querySelector('.active-popup');
//   if (isEscKey(evt) || evt.target.classList.contains('close-popup')) {
//     closePopup(popup);
//   }
// };

// function closePopup(popup) {
//   popup.remove();
//   document.removeEventListener('keydown', onClosePopup);
// }

// const closePopupListener = (popup) => {
//   document.addEventListener('keydown', onClosePopup);
//   popup.addEventListener('click', onClosePopup);
// };

// const showPopup = (template) => {
//   const popup = template.cloneNode(true);
//   popup.classList.add('active-popup');
//   const phoneField = popup.querySelector('.modal__phone');
//   document.body.insertAdjacentElement('beforeend', popup);
//   if (phoneField) {
//     const form = popup.querySelector('.modal__form');
//     const popupFormSubmitButton = form.querySelector('[type="submit"]');
//     popupFormSubmitButton.addEventListener('click', onFormSubmit);
//     setPhoneInputListener(form);
//     setEmailInputListener(form);
//     onEmptyPhoneFocus(form);
//     phoneField.focus();
//     fillForm(form);
//   }
//   closePopupListener(popup);
// };

// const showForm = (evt) => {
//   evt.preventDefault();
//   showPopup(formPopupTemplate);
// };


// const onBuyTourButtonsClick = () => {
//   buyButtons.forEach((button) => button.addEventListener('click', showForm));
// };


