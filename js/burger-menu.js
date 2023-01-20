const menuIcon = document.querySelector(".header__menu-burger");
const menuList = document.querySelector(".header__nav");

function showMenu() {
  menuList.classList.toggle("active");
}

menuIcon.addEventListener("click", showMenu);