import AOS from "aos";
import "aos/dist/aos.css";

console.log("Running!");
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initBurgerMenu();
  setRandomQuote();

  AOS.init({
    offset: 120,
    duration: 600,
    easing: "ease",
    once: true,
  });

    // 🔥 REQUIRED for Astro
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});


// ==========================
// Header scroll behavior
// ==========================
function initHeaderScroll(): void {
  const header = document.querySelector<HTMLElement>("header");
  const hero = document.querySelector<HTMLElement>(".hero");

  if (!header || !hero) return;

  const heroBottom = hero.offsetTop + hero.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= heroBottom - 100) {
      header.classList.add("is-sidebar");
      document.body.classList.add("has-sidebar");
    } else {
      header.classList.remove("is-sidebar");
      document.body.classList.remove("has-sidebar");
    }
  });
}


/* ==========================
   OLD: MutationObserver (no longer needed in Astro)
   Astro renders components immediately, no DOM injection delay
========================== */
// function initHeaderScrollBehavior() {
//   const header = document.querySelector('header');
//   const hero = document.querySelector('.hero');

//   if (!header || !hero) return;

//   const heroBottom = hero.offsetTop + hero.offsetHeight;

//   window.addEventListener('scroll', () => {
//     if (window.scrollY >= heroBottom - 50) {
//       header.classList.add('is-sidebar');
//       document.body.classList.add('has-sidebar');
//     } else {
//       header.classList.remove('is-sidebar');
//       document.body.classList.remove('has-sidebar');
//     }
//   });
// }

// const observer = new MutationObserver(() => {
//   const header = document.querySelector('header');
//   if (header) {
//     observer.disconnect();
//     initHeaderScrollBehavior();
//   }
// });

// observer.observe(document.body, {
//   childList: true,
//   subtree: true
// });


// ==========================
// Burger menu
// ==========================
function initBurgerMenu(): void {
  const header = document.querySelector<HTMLElement>("header");
  const burger = document.querySelector<HTMLElement>(".burger");

  if (!header || !burger) return;

  burger.addEventListener("click", () => {
    header.classList.toggle("menu-open");
  });

  document.querySelectorAll<HTMLAnchorElement>(".nav-links a")
    .forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("menu-open");
      });
    });
}


/* ==========================
   OLD: Partial injection system (replaced by Astro components)
========================== */
// async function loadPartials() {
//   document.getElementById("header").innerHTML =
//     await (await fetch("partials/header.html")).text();

//   document.getElementById("footer").innerHTML =
//     await (await fetch("partials/footer.html")).text();

//   setActiveNav();
//   setFooterDate();
//   initBurgerMenu();
// }


// ==========================
// Random quote
// ==========================
function setRandomQuote(): void {
  const quotes: string[] = [
    "Justice with Integrity",
    "Your Legal Partner",
    "Guidance You Can Trust",
    "Your legal peace of mind starts here.",
    "Trusted advice. Proven results.",
    "You deserve clear answers and confident representation.",
    "Guiding clients through complex legal issues—every step of the way.",
    "Legal strategy backed by results.",
    "Every case is personal. Every client matters.",
    "We listen. We advise. We advocate.",
    "You're not just a case number—you’re our priority.",
    "Don’t wait for your rights to be compromised—get legal help now.",
    "Justice. Clarity. Results.",
    "Law with purpose.",
    "Your case. Our commitment.",
    "Where expertise meets integrity—your legal solution starts here.",
    "Trusted legal guidance for permits, licenses, and authorizations.",
    "Your roadmap through complex regulatory systems.",
    "Licensing shouldn’t be a legal maze. We’ll guide you through.",
    "Don’t let paperwork delay your progress—book a consultation today.",
    "We help you move forward—legally and confidently.",
    "Permits approved. Problems avoided."
  ];

  const quoteEl = document.getElementById("quote");
  if (!quoteEl) return;

  quoteEl.textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}


/* ==========================
   OLD: Nav + footer helpers (move to Astro instead)
========================== */
// function setActiveNav() {
//   const page = document.body.dataset.page;
//   document.querySelectorAll(".nav-links a").forEach(link => {
//     if (link.dataset.page === page) {
//       link.classList.add("active");
//     }
//   });
// }

// function setFooterDate() {
//   const now = new Date();
//   document.getElementById("year").textContent = now.getFullYear();
//   document.getElementById("month").textContent =
//     now.toLocaleString("en-US", { month: "long" });
// }


// /* ==========================
//    OLD ENTRY POINT
// ========================== */
// loadPartials();
