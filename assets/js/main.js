/**
 * Progressive Enhancement Scripts for Navin K Portfolio
 * Features: Accessible mobile drawer navigation, focus trapping, Escape key handling,
 * and active section scroll-spy via IntersectionObserver.
 * 
 * Works completely if JavaScript is disabled; progressive enhancements only.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Menu Drawer & Accessible Toggle
  // -------------------------------------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
  
  if (menuToggle && mobileNav) {
    const focusableElements = mobileNav.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    function openMenu() {
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close navigation menu');
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      
      // Move focus to first element in drawer
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    function closeMenu(restoreFocus = true) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      
      if (restoreFocus) {
        menuToggle.focus();
      }
    }

    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on navigation link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu(false);
      });
    });

    // Keyboard support: Escape key closes menu, Tab traps focus
    document.addEventListener('keydown', (e) => {
      if (!mobileNav.classList.contains('open')) return;

      if (e.key === 'Escape') {
        closeMenu(true);
      } else if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });

    // Close mobile menu on desktop viewport resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900 && mobileNav.classList.contains('open')) {
        closeMenu(false);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. Active Section Scroll-Spy via IntersectionObserver
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const railLinks = document.querySelectorAll('.rail-link');
  const allNavLinks = document.querySelectorAll('.rail-link, .mobile-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section occupies upper-mid viewport
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          updateActiveLink(activeId);
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    function updateActiveLink(id) {
      allNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${id}`) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }
});
