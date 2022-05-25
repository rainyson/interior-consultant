var toggleButton = document.querySelector(".main__nav__menu__toggle");
var mobileNav = document.querySelector(".main__mobile__nav");
var closeButton = document.querySelector(".main__mobile__nav__close__btn");

toggleButton.addEventListener("click", function (event) {
  mobileNav.classList.add("open");
});

closeButton.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  mobileNav.classList.remove("close");
});
