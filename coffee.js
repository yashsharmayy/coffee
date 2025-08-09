const navlink=document.querySelectorAll('.nav-link');
const openbar=document.querySelector('#menu-open-button');
const closebar=document.querySelector('#menu-close-button');
openbar.addEventListener('click',()=>{
    document.body.classList.toggle('toggle-bar');
});

closebar.addEventListener('click',()=>{
    openbar.click()
});

navlink.forEach(link => {
  link.addEventListener("click",()=>{
    openbar.click();
  });
});
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
  }


});