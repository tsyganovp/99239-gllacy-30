var modalCart = document.querySelector(".cart-preview");
var modalCartLink = document.querySelector(".user-icons__cart");

modalCartLink.addEventListener("click", function () {
    modalCart.classList.toggle("cart-preview--show");
})
