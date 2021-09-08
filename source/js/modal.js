const popup = document.querySelector('.pop-up');
const buttonsShow = document.querySelectorAll('.button-show');
const buttonsHide = document.querySelectorAll('.button-hide');
const form = popup.querySelectorAll('.pop-up__form');
const pnoneInput = document.querySelectorAll('#pnone-input');
const popupFormSubmitButtons = document.querySelectorAll('[type="submit"]');
const container = popup.querySelector('.pop-up__container');
const successPopupTemplate = document.querySelector('#success-message').content.querySelector('.success-message');
console.log(popupFormSubmitButtons)

buttonsShow.forEach((buttonShow) => {
  buttonShow.addEventListener("click", function () {
    popup.classList.add('pop-up--open');
    pnoneInput.focus();
  })
});



const onClosePopup = (evt) => {
  const popup = document.querySelector('pop-up--open');
  if (isEscKey(evt) || evt.target.classList.contains('button-hide')) {
    popup.remove();
    document.removeEventListener('keydown', onClosePopup)
}
}

buttonsHide.forEach((buttonHide) => {
  buttonHide.addEventListener('click', function () {
    popup.classList.remove('pop-up--open');
    document.removeEventListener('keydown', onClosePopup);
  });
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

popupFormSubmitButtons.forEach((popupFormSubmitButton) => {
  popupFormSubmitButton.addEventListener('click', showSuccesMessage);
});

console.log(popupFormSubmitButtons)
