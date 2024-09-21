var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1, // 1 slide
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 2, // 2 slides
        },
        // when window width is > 768px
        769: {
            slidesPerView: 3, // 3 slides
        },
    },
});
