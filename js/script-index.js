var loginLink = document.querySelector(".user-icons__enter");
var loginModal = document.querySelector(".login-popup");
  loginLink.addEventListener("click",function() {
  evt.preventDefault();
  loginModal.classList.toggle("login-popup--show");
});

var searchLink = document.querySelector(".user-icons__search");
var searchModal = document.querySelector(".search-popup");
searchLink.addEventListener("click",function() {
  event.preventDefault();
  searchModal.classList.toggle("search-popup--show");
});

var modalLink = document.querySelector(".map__contacts-button");
var feedbackModal = document.querySelector(".feedback-popup");
var closeModalBtn = document.querySelector(".feedback-popup-close");

modalLink.addEventListener("click",function() {
  event.preventDefault();
  feedbackModal.classList.add("feedback-popup--show");
});
closeModalBtn.addEventListener("click",function () {
  event.preventDefault();
  feedbackModal.classList.remove("feedback-popup--show");
});

var page = document.querySelector(".main-body");
var sliderCheckOne = document.querySelector(".slider-icons__icon--1");
var sliderCheckTwo = document.querySelector(".slider-icons__icon--2");
var sliderCheckThree = document.querySelector(".slider-icons__icon--3");
var sliderOne = document.querySelector(".slider__img-container--one");
var sliderTwo = document.querySelector(".slider__img-container--two");
var sliderThree = document.querySelector(".slider__img-container--three");
sliderCheckOne.addEventListener("click", function() {
  sliderOne.classList.add("slider__img-container--active");
  sliderTwo.classList.remove("slider__img-container--active");
  sliderThree.classList.remove("slider__img-container--active");

  sliderCheckOne.classList.add("slider-icons__icon--active");
  sliderCheckTwo.classList.remove("slider-icons__icon--active");
  sliderCheckThree.classList.remove("slider-icons__icon--active");

  page.classList.add("slider-1--active");
  page.classList.remove("slider-2--active");
  page.classList.remove("slider-3--active");
});

  sliderCheckTwo.addEventListener("click", function() {
    sliderOne.classList.remove("slider__img-container--active");
    sliderTwo.classList.add("slider__img-container--active");
    sliderThree.classList.remove("slider__img-container--active");

    page.classList.add("slider-1--active");
    page.classList.remove("slider-2--active");
    page.classList.remove("slider-3--active");
    

    sliderCheckOne.classList.remove("slider-icons__icon--active");
    sliderCheckTwo.classList.add("slider-icons__icon--active");
    sliderCheckThree.classList.remove("slider-icons__icon--active");

    page.classList.remove("slider-1--active");
    page.classList.add("slider-2--active");
    page.classList.remove("slider-3--active");
});

sliderCheckThree.addEventListener("click", function() {
  sliderOne.classList.remove("slider__img-container--active");
  sliderTwo.classList.remove("slider__img-container--active");
  sliderThree.classList.add("slider__img-container--active");

  sliderCheckOne.classList.remove("slider-icons__icon--active");
  sliderCheckTwo.classList.remove("slider-icons__icon--active");
  sliderCheckThree.classList.add("slider-icons__icon--active");

  page.classList.remove("slider-1--active");
  page.classList.remove("slider-2--active");
  page.classList.add("slider-3--active");
});


