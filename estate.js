// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     centeredSlides: false,
//     spaceBetween: 0,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "fraction",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         769: {
//             slidesPerView: 3,
//         },
//     },
// });



const navigation = document.getElementById("navigation");
const links = document.querySelectorAll("ul li a");

// Scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navigation.style.backgroundColor = "white";
        navigation.style.boxShadow = "0px 2px 3px rgba(255, 255, 255, 0.65)";
        links.forEach((link) => {
            link.classList.add("sticky-color");
        });
    } else {
        navigation.style.backgroundColor = "transparent";
        navigation.style.boxShadow = "none";
        links.forEach((link) => {
            link.classList.remove("sticky-color");
        });
    }
});

// Add active state to clicked links
links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const openNavbar = document.querySelector("#hamburger-icon")
const closeNavbar = document.querySelector("#close-icon")
const smallScreenNavbar = document.querySelector('.for-mobile-nav')
const listContainer = document.querySelector('ul')


openNavbar.addEventListener("click", ()=>{
    openNavbar.style.display = "none"
    smallScreenNavbar.classList.add("small-screen")
    listContainer.style.display = "flex"
    closeNavbar.classList.add("show")
    listContainer.classList.add("list-container")
})
closeNavbar.addEventListener("click", ()=>{
    openNavbar.style.display = "block"
    smallScreenNavbar.classList.remove("small-screen")
    listContainer.classList.remove("list-container")
    listContainer.style.display = "none"
    closeNavbar.classList.remove("show")
})