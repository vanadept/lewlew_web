/**
 * Artist Showcase
 * Main JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {

  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();

});


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("is-open");

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal() {

  const elements = document.querySelectorAll(
    ".section, .work, .gallery-item, .news-item"
  );

  if (!elements.length) {
    return;
  }

  elements.forEach((element) => {
    element.classList.add("reveal");
  });


  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.08
    }
  );


  elements.forEach((element) => {
    observer.observe(element);
  });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

  const links = document.querySelectorAll(
    'a[href^="#"]'
  );

  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

}
