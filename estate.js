document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.getElementById("navigation");


    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            navigation.style.backgroundColor = "white";
            navigation.style.boxShadow = "0px 2px 3px rgba(255, 255, 255, 0.65)";
        } else {
            navigation.style.backgroundColor = "transparent";
            navigation.style.boxShadow = "none";
        }
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
        smallScreenNavbar.classList.add("removing")
        setTimeout(()=>{
          smallScreenNavbar.classList.remove("small-screen", "removing")
        }, 500)
        listContainer.classList.remove("list-container")
        listContainer.style.display = "none"
        closeNavbar.classList.remove("show")
    })


  var flkty = new Flickity('.carousel', {
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left', 
    contain: true
  });

  function updateAlignment() {
    if (window.innerWidth <= 480) {
      flkty.options.cellAlign = 'right';
    } else if (window.innerWidth <= 768) {
      flkty.options.cellAlign = 'center';
    } else {
      flkty.options.cellAlign = 'left'; 
    }
    flkty.resize();
  }


  updateAlignment();
  
  window.addEventListener('resize', updateAlignment);

  document.getElementById('prev').addEventListener('click', function() {
    flkty.previous();
  });

  document.getElementById('next').addEventListener('click', function() {
    flkty.next();
  });
});

const prev = document.querySelector("#previous")
const next = document.querySelector("#next")
const slideImages = document.querySelectorAll('.slide')
let index = 0

document.addEventListener("DOMContentLoaded", () => initialize())

const initialize = () => {
  showSlide(index)
}

const showSlide  = (index) => {
  if(index < 0){
    index = slideImages.length - 1
  }else if(index >= slideImages.length){
    index = 0
  }
  slideImages.forEach((slideImage)=>{
    slideImage.style.display = "none"
  })
  slideImages[index].style.display = "block"
}

const prevSlide = () => {
  index--;
  showSlide(index)
}

const nextSlide = () => {
  index++;
  showSlide(index)
}