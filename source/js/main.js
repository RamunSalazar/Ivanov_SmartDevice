'use strict';
const footerNavWrapElement = document.querySelector('.footer__nav-wrap');
const footerAddressWrapElement = document.querySelector('.footer__address-wrap');
const spanFooterNavWrapElement = footerNavWrapElement.querySelector('span');
const spanFooterAddressWrapElement = footerAddressWrapElement.querySelector('span');
const feedbackFormWrapElement = document.querySelector('.feedback__form-wrap');
const inputTypeTelElement = feedbackFormWrapElement.querySelector('input[type="tel"]');
const bodyElement = document.querySelector('body');
const headerModalWrapElement = document.querySelector('.header__modal-wrap');
const headerModalCloseElement = document.querySelector('.header__modal-close');
const headerFeedbackLinkElement = document.querySelector('.header__feedback-link');
const headerInputTypeTextElement = headerModalWrapElement.querySelector('input[type="text"]');
const headerInputTypeTelElement = headerModalWrapElement.querySelector('input[type="tel"]');
const headerTextareaElement = headerModalWrapElement.querySelector('textarea');
const headerButtonTypeSubmitElement = headerModalWrapElement.querySelector('button[type="submit"]');

const PHONE_LENGHT_TWO = 2;
const PHONE_LENGHT_SIX = 6;
const PHONE_LENGHT_SEVEN = 7;
const ESCAPE_KEY_CODE = 27;
const BACKSPACE_KEY_CODE = 8;
let storageName = '';
let storagePhone = '';
let storageQuestion = '';

footerNavWrapElement.classList.remove('footer__nav-wrap--nojs');
footerAddressWrapElement.classList.remove('footer__address-wrap--nojs');

spanFooterNavWrapElement.addEventListener('click', () => {
  if (footerNavWrapElement.classList.contains('footer__nav-wrap--open')) {
    footerNavWrapElement.classList.remove('footer__nav-wrap--open');
  } else {
    footerNavWrapElement.classList.add('footer__nav-wrap--open');
  }

  if (footerAddressWrapElement.classList.contains('footer__address-wrap--open')) {
    footerAddressWrapElement.classList.remove('footer__address-wrap--open');
  }
});

spanFooterAddressWrapElement.addEventListener('click', () => {
  if (footerAddressWrapElement.classList.contains('footer__address-wrap--open')) {
    footerAddressWrapElement.classList.remove('footer__address-wrap--open');
  } else {
    footerAddressWrapElement.classList.add('footer__address-wrap--open');
  }

  if (footerNavWrapElement.classList.contains('footer__nav-wrap--open')) {
    footerNavWrapElement.classList.remove('footer__nav-wrap--open');
  }
});

inputTypeTelElement.addEventListener('focus', () => {
  inputTypeTelElement.value = '+7(';
});

headerInputTypeTelElement.addEventListener('focus', () => {
  headerInputTypeTelElement.value = '+7(';
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === BACKSPACE_KEY_CODE) {
    if (String(inputTypeTelElement.value).length === PHONE_LENGHT_SEVEN) {
      inputTypeTelElement.value = String(inputTypeTelElement.value).slice(0, 6);
    }
  }

  if (evt.keyCode === BACKSPACE_KEY_CODE) {
    if (String(headerInputTypeTelElement.value).length === PHONE_LENGHT_SEVEN) {
      headerInputTypeTelElement.value = String(headerInputTypeTelElement.value).slice(0, 6);
    }
  }
});

headerInputTypeTelElement.addEventListener('input', () => {
  if (String(headerInputTypeTelElement.value).length === PHONE_LENGHT_TWO) {
    headerInputTypeTelElement.value = String(headerInputTypeTelElement.value) + '(';
  }

  if (String(headerInputTypeTelElement.value).length === PHONE_LENGHT_SIX) {
    headerInputTypeTelElement.value = String(headerInputTypeTelElement.value) + ')';
  }
});

inputTypeTelElement.addEventListener('input', () => {
  if (String(inputTypeTelElement.value).length === PHONE_LENGHT_TWO) {
    inputTypeTelElement.value = String(inputTypeTelElement.value) + '(';
  }

  if (String(inputTypeTelElement.value).length === PHONE_LENGHT_SIX) {
    inputTypeTelElement.value = String(inputTypeTelElement.value) + ')';
  }
});

try {
  storageName = localStorage.getItem('name');
} catch (err) {
  /*  */
}

try {
  storagePhone = localStorage.getItem('phone');
} catch (err) {
  /*  */
}

try {
  storageQuestion = localStorage.getItem('question');
} catch (err) {
  /*  */
}

headerFeedbackLinkElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  headerModalWrapElement.classList.add('header__modal-wrap--open');
  bodyElement.classList.add('body--modal-open');

  if (!storageName && !storagePhone && !storageQuestion) {
    headerInputTypeTextElement.focus();
  } else if (storageName && !storagePhone && !storageQuestion) {
    headerInputTypeTextElement.value = storageName;
    headerInputTypeTextElement.focus();
  } else if (!storageName && storagePhone && !storageQuestion) {
    headerInputTypeTelElement.value = storagePhone;
    headerInputTypeTextElement.focus();
  } else if (!storageName && !storagePhone && storageQuestion) {
    headerTextareaElement.value = storageQuestion;
    headerInputTypeTextElement.focus();
  } else if (storageName && storagePhone && !storageQuestion) {
    headerInputTypeTextElement.value = storageName;
    headerInputTypeTelElement.value = storagePhone;
    headerInputTypeTextElement.focus();
  } else if (!storageName && storagePhone && storageQuestion) {
    headerInputTypeTelElement.value = storagePhone;
    headerTextareaElement.value = storageQuestion;
    headerInputTypeTextElement.focus();
  } else if (storageName && !storagePhone && storageQuestion) {
    headerInputTypeTextElement.value = storageName;
    headerTextareaElement.value = storageQuestion;
    headerInputTypeTextElement.focus();
  } else {
    headerInputTypeTextElement.value = storageName;
    headerInputTypeTelElement.value = storagePhone;
    headerTextareaElement.value = storageQuestion;
    headerInputTypeTextElement.focus();
  }
});

headerButtonTypeSubmitElement.addEventListener('submit', (evt) => {
  if (headerInputTypeTextElement.value === '' && headerInputTypeTelElement.value === '' && headerTextareaElement.value === '') {
    evt.preventDefault();
  } else if (headerInputTypeTextElement.value !== '' && headerInputTypeTelElement.value === '' && headerTextareaElement.value === '') {
    evt.preventDefault();
    localStorage.setItem('name', headerInputTypeTextElement.value);
  } else if (headerInputTypeTextElement.value === '' && headerInputTypeTelElement.value !== '' && headerTextareaElement.value === '') {
    evt.preventDefault();
    localStorage.setItem('phone', headerInputTypeTelElement.value);
  } else if (headerInputTypeTextElement.value === '' && headerInputTypeTelElement.value === '' && headerTextareaElement.value !== '') {
    evt.preventDefault();
    localStorage.setItem('question', headerTextareaElement.value);
  } else if (headerInputTypeTextElement.value !== '' && headerInputTypeTelElement.value !== '' && headerTextareaElement.value === '') {
    localStorage.setItem('name', headerInputTypeTextElement.value);
    localStorage.setItem('phone', headerInputTypeTelElement.value);
  } else if (headerInputTypeTextElement.value === '' && headerInputTypeTelElement.value !== '' && headerTextareaElement.value !== '') {
    evt.preventDefault();
    localStorage.setItem('phone', headerInputTypeTelElement.value);
    localStorage.setItem('question', headerTextareaElement.value);
  } else if (headerInputTypeTextElement.value !== '' && headerInputTypeTelElement.value === '' && headerTextareaElement.value !== '') {
    evt.preventDefault();
    localStorage.setItem('name', headerInputTypeTextElement.value);
    localStorage.setItem('question', headerTextareaElement.value);
  } else if (headerInputTypeTextElement.value !== '' && headerInputTypeTelElement.value !== '' && headerTextareaElement.value !== '') {
    localStorage.setItem('name', headerInputTypeTextElement.value);
    localStorage.setItem('phone', headerInputTypeTelElement.value);
    localStorage.setItem('question', headerTextareaElement.value);
  }
});

headerModalCloseElement.addEventListener('click', () => {
  headerModalWrapElement.classList.remove('header__modal-wrap--open');
  bodyElement.classList.remove('body--modal-open');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    headerModalWrapElement.classList.remove('header__modal-wrap--open');
    bodyElement.classList.remove('body--modal-open');
  }
});

window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('header__modal-wrap')) {
    headerModalWrapElement.classList.remove('header__modal-wrap--open');
    bodyElement.classList.remove('body--modal-open');
  }
});

headerInputTypeTelElement.addEventListener('click', () => {
  headerInputTypeTelElement.setSelectionRange(4, 4);
});

inputTypeTelElement.addEventListener('click', () => {
  inputTypeTelElement.setSelectionRange(4, 4);
});