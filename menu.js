

var menuIcon = document.querySelector(".menuIcon");
var closeIcon = document.querySelector(".closeIcon");
var menu = document.querySelector(".menu");


//  menuIcon.addEventListener("click", () => {
//      menuIcon.classList.toggle('hide');
//    closeIcon.classList.toggle('hide');
//    menu.classList.toggle('open');
//  });

menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    menu.classList.toggle('open');
};
