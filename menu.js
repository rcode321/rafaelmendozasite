// const link1 = document.querySelector('.menu');

var menu = document.querySelector(".menu");
var closeIcon = document.querySelector(".toggler");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}
