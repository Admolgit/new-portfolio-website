// toggle icon menu bar
let menuBar = document.querySelector("#menuBar");
let menuClose = document.querySelector("#menuClose");
let navbar = document.querySelector(".navbar");

menuBar.onclick = () => {
  menuBar.classList.toggle("fa-close");
  navbar.classList.toggle("active");
  console.log("menuBar");
};

// Change active to current page
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle and navbar
  // menuBar.classList.toggle('fa-close');
  // navbar.classList.toggle('active');
};

// Scroll reveal
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.homeContent, .heading', { origin: 'top', });
ScrollReveal().reveal('.img, .servicesContainer, .portfolioBox, .contactContainer form, .serviceBox3', { origin: 'bottom', });
ScrollReveal().reveal('.homeContent h1, .aboutImg, .serviceBox1', { origin: 'left', });
ScrollReveal().reveal('.homeContent p, .aboutContent, .serviceBox2', { origin: 'right', });


// Typed text animation
const typed = new Typed('.multipleText', {
  strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Youtuber'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});