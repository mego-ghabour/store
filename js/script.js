

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);




var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 1,
  loop:true,

  centerSlide: "true",
  grabCursor: "true",
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-navBtn",
    prevEl: ".swiper-navBtn",
  },

});






var categories = new Swiper(".swiperCategories", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop:true,

  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    // delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-navBtn",
    prevEl: ".swiper-navBtn",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});
