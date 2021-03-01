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

