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
   MOBILE NAVIGATION
========================================================= */

const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav a");


function openMenu() {

  document.body.classList.add("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

  menuButton.setAttribute(
    "aria-label",
    "Close navigation"
  );

}


function closeMenu() {

  document.body.classList.remove("menu-open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  menuButton.setAttribute(
    "aria-label",
    "Open navigation"
  );

}


/* Toggle */

menuButton.addEventListener("click", () => {

  const isOpen =
    document.body.classList.contains("menu-open");

  if (isOpen) {

    closeMenu();

  } else {

    openMenu();

  }

});


/* Close button */

menuClose.addEventListener(
  "click",
  closeMenu
);


/* Close after selecting menu */

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    closeMenu
  );

});


/* Close with Escape */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      document.body.classList.contains("menu-open")
    ) {

      closeMenu();

    }

  }
);



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
