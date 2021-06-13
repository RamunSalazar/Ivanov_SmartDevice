'use strict';
const footerNavWrapElement = document.querySelector('.footer__nav-wrap');
const footerAddressWrapElement = document.querySelector('.footer__address-wrap');
const spanFooterNavWrapElement = footerNavWrapElement.querySelector('span');
const spanFooterAddressWrapElement = footerAddressWrapElement.querySelector('span');
const feedbackFormWrapElement = document.querySelector('.feedback__form-wrap');
const inputTypeTelElement = feedbackFormWrapElement.querySelector('input[type="tel"]');

const PHONE_LENGHT = 6;

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
})

inputTypeTelElement.addEventListener('focus', () => {
  inputTypeTelElement.value= "+7(";
})

inputTypeTelElement.addEventListener('input', () => {
  if (String(inputTypeTelElement.value).length === PHONE_LENGHT) {
    inputTypeTelElement.value = String(inputTypeTelElement.value) + ')';
  }
})