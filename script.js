
var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navClosebutton = navMenu.querySelector('.navClosebutton'),
      navOpenbutton = body.querySelector('.navOpenbutton');

if(navMenu && navOpenbutton){
    navOpenbutton.addEventListener("click", () =>{
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    })
}
if(navMenu && navClosebutton){
    navClosebutton.addEventListener("click", () =>{
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    })
}