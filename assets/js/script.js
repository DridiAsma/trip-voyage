
// preloader 
// const preloader = document.querySelector("[data-preloader]");
// window.addEventListener("load", () => {
//     preloader.classList.add("remove");
// });


//  Swipper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // animation
    autoplay: {
        delay: 5000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


    //button next prev
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },




    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.25,
        spaceBetween: 20,
      },
    },
  });




  //  Swipper js 
var swiper = new Swiper(".testSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // animation
  autoplay: {
      delay: 3000,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },




  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});