'use strict';
const footerNavWrapElement = document.querySelector('.footer__nav-wrap');
const footerAddressWrapElement = document.querySelector('.footer__address-wrap');
const spanFooterNavWrapElement = footerNavWrapElement.querySelector('span');
const spanFooterAddressWrapElement = footerAddressWrapElement.querySelector('span');

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