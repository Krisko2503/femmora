/* ════════════════════════════════════════════════════════════
   FEMMORA — main.js
   Navbar scroll · Logo CSS state · Mobile menu
   FAQ accordion · Scroll reveal · Newsletter form
════════════════════════════════════════════════════════════ */

'use strict';

// ── Navbar: transparent → solid dark charcoal on scroll ─────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}

if (navbar) {
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

// ── Hero fade-out: entire hero section fades as user scrolls ────────────────
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    let scrollPos = window.scrollY;
    // Fade out completely after 600px of scrolling
    let calcOpacity = 1 - (scrollPos / 600);
    hero.style.opacity = Math.max(calcOpacity, 0);
  }
});


// ── Mobile burger menu ───────────────────────────────────────────────────────
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (burger && mobileMenu) {
  burger.addEventListener('click', openMobileMenu);
  mobileClose && mobileClose.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}

// ── Smooth scroll for anchor links ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = (navbar ? navbar.offsetHeight : 80) + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Scroll Reveal (IntersectionObserver) ────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger siblings within the same parent for cascade effect
      const siblings = Array.from(
        entry.target.parentElement.querySelectorAll('.reveal')
      );
      const idx   = siblings.indexOf(entry.target);
      const delay = Math.max(0, idx * 80);

      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FAQ Accordion ────────────────────────────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answerId   = btn.getAttribute('aria-controls');
    const answer     = document.getElementById(answerId);

    // Collapse all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const id = b.getAttribute('aria-controls');
      const a  = document.getElementById(id);
      if (a) a.classList.remove('open');
    });

    // Open clicked (unless it was already open)
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      if (answer) answer.classList.add('open');
    }
  });
});

// ── Newsletter Form ──────────────────────────────────────────────────────────
const form    = document.getElementById('newsletterForm');
const success = document.getElementById('newsletterSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (emailInput) {
        emailInput.focus();
        emailInput.style.outline = '2px solid var(--burgundy)';
        setTimeout(() => { emailInput.style.outline = ''; }, 2000);
      }
      return;
    }

    // Success state (replace with real API call)
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    form.reset();
  });
}

// ── Pillar card hover lift ───────────────────────────────────────────────────
document.querySelectorAll('.pillar-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 28px 60px rgba(21,21,21,0.28)';
    card.style.zIndex    = '3';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
    card.style.zIndex    = '';
  });
});

// ── Review card micro-tilt ───────────────────────────────────────────────────
document.querySelectorAll('.review-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
