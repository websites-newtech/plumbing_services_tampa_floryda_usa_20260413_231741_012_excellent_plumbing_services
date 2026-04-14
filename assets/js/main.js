/**
 * Excellent Plumbing Services — Main JS
 * Handles: scroll animations, navbar scroll state
 */

(function () {
  'use strict';

  // ─── Intersection Observer — Scroll Animations ───
  const animateElements = document.querySelectorAll('[data-animate]');

  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger delay for sibling elements
            const siblings = Array.from(
              entry.target.parentElement.querySelectorAll('[data-animate]:not(.visible)')
            );
            const siblingIndex = siblings.indexOf(entry.target);
            const delay = siblingIndex >= 0 ? siblingIndex * 60 : 0;
            const cappedDelay = Math.min(delay, 400);

            setTimeout(() => {
              entry.target.classList.add('visible');
            }, cappedDelay);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animateElements.forEach((el) => observer.observe(el));
  }

  // ─── Navbar Scroll State ───
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }

      lastScrollY = currentScrollY;
    };

    // Debounced scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateNavbar();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateNavbar(); // initial
  }

  // ─── Smooth anchor scrolling for hash links ───
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
          10
        ) || 72;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

})();