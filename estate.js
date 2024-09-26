document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.getElementById("navigation");
    const links = document.querySelectorAll("ul li a");


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
        smallScreenNavbar.classList.toggle("small-screen")
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

  // Initial update
  updateAlignment();

  // Listen for window resize events
  window.addEventListener('resize', updateAlignment);

  // Custom buttons control
  document.getElementById('prev').addEventListener('click', function() {
    flkty.previous();
  });

  document.getElementById('next').addEventListener('click', function() {
    flkty.next();
  });
});
