/* ══════════════════════════════════════════════
   FEMMORA — main.js
   Fading Navbar · Mobile Burger · Scroll Reveal
   Language Switcher (ES / EN) · i18n Engine
══════════════════════════════════════════════ */

// ── i18n Translations ─────────────────────────────────────────────────────────
const translations = {
  es: {
    // Announcement
    announcement: '✦ Productos Digitales Para Mujeres Emprendedoras ✦',

    // Navbar
    nav_inicio:   'Inicio',
    nav_catalogo: 'Catálogo',
    nav_contacto: 'Contacto',

    // Hero
    hero_eyebrow: 'HERRAMIENTAS PARA MUJERES CON VISIÓN',
    hero_line1:   'Diseña tu visión.',
    hero_line2:   'Construye tu marca.',
    hero_line3:   'Eleva tu vida.',
    hero_sub:     'Productos digitales premium para mujeres que buscan claridad, estrategia y elegancia en cada paso de su negocio.',
    hero_cta:     'EXPLORAR LA COLECCIÓN',

    // Mission banner
    banner_text:      'INTENCIÓN EN LO QUE HACES. ELEGANCIA EN CÓMO LO VIVES.',
    mission_eyebrow:  'NUESTRA MISIÓN',
    mission_headline: 'Ayudamos a las mujeres a desarrollar su potencial, fortalecer su marca y crear una vida alineada con sus valores.',
    mission_body:     'Creamos recursos digitales elegantes y estratégicos que inspiran crecimiento, confianza e intención. Femmora es más que una marca. Es un estándar.',
    mission_cta:      'CONOCE MÁS SOBRE NOSOTRAS →',

    // Products
    products_title:    'Diseñados para la mujer que construye sus sueños',
    products_subtitle: 'DIARIOS PARA TU CRECIMIENTO',
    badge_nuevo:       'NUEVO',
    card_cta:          'VER PRODUCTO →',
    prod1_title:       'Diario "Estrategia de marca"',
    prod1_price:       '€24,00 EUR',
    prod2_title:       'Diario "Éxito alineado"',
    prod2_price:       '€24,00 EUR',
    prod3_title:       'Diario "Mentalidad empresarial"',
    prod3_price:       '€24,00 EUR',

    // Studio
    studio_desc:  'Plantillas y recursos listos para usar que te ayudan a mostrar tu negocio con profesionalismo y ahorrar tiempo valioso.',
    studio_cta:   'DESCUBRE CREATIVE STUDIO →',
    studio_badge: 'DISEÑADO PARA AHORRAR TIEMPO. CREADO PARA ELEVAR TU MARCA.',

    // Benefits
    benefit1_title: 'ELEVA TU MARCA',
    benefit1_text:  'Materiales estratégicos y estéticos que reflejan tu visión única.',
    benefit2_title: 'AHORRA TIEMPO Y ENERGÍA',
    benefit2_text:  'Plantillas listas para usar que te permiten enfocarte en lo que realmente importa.',
    benefit3_title: 'ESTRATEGIA CON BELLEZA',
    benefit3_text:  'Cada diseño viene con una intención estratégica y atención al detalle.',
    benefit4_title: 'HECHO PARA MUJERES EMPRENDEDORAS',
    benefit4_text:  'Recursos creados con empatía, elegancia y una comprensión real.',
    benefit5_title: 'CRECE CON CONFIANZA',
    benefit5_text:  'Herramientas que apoyan tu crecimiento, tus metas y tu libertad.',

    // Footer
    footer_tagline:   'Productos digitales premium para mujeres con visión. Una marca. Un estándar.',
    footer_nav_title: 'Navegación',
    footer_legal_title: 'Legal',
    footer_privacy:   'Política de Privacidad',
    footer_terms:     'Términos y Condiciones',
    footer_refund:    'Política de Reembolso',
    footer_copy:      '© 2025 Femmora. Todos los derechos reservados.',
  },

  en: {
    // Announcement
    announcement: '✦ Premium Digital Products for Female Entrepreneurs ✦',

    // Navbar
    nav_inicio:   'Home',
    nav_catalogo: 'Catalogue',
    nav_contacto: 'Contact',

    // Hero
    hero_eyebrow: 'TOOLS FOR WOMEN WITH VISION',
    hero_line1:   'Design your vision.',
    hero_line2:   'Build your brand.',
    hero_line3:   'Elevate your life.',
    hero_sub:     'Premium digital products for women seeking clarity, strategy, and elegance at every step of their business.',
    hero_cta:     'EXPLORE THE COLLECTION',

    // Mission banner
    banner_text:      'INTENTION IN WHAT YOU DO. ELEGANCE IN HOW YOU LIVE.',
    mission_eyebrow:  'OUR MISSION',
    mission_headline: 'We help women develop their potential, strengthen their brand, and create a life aligned with their values.',
    mission_body:     'We create elegant and strategic digital resources that inspire growth, confidence, and intention. Femmora is more than a brand. It is a standard.',
    mission_cta:      'LEARN MORE ABOUT US →',

    // Products
    products_title:    'Designed for the woman who builds her dreams',
    products_subtitle: 'JOURNALS FOR YOUR GROWTH',
    badge_nuevo:       'NEW',
    card_cta:          'VIEW PRODUCT →',
    prod1_title:       'Journal "Brand Strategy"',
    prod1_price:       '€24.00 EUR',
    prod2_title:       'Journal "Aligned Success"',
    prod2_price:       '€24.00 EUR',
    prod3_title:       'Journal "Entrepreneurial Mindset"',
    prod3_price:       '€24.00 EUR',

    // Studio
    studio_desc:  'Ready-to-use templates and resources that help you showcase your business professionally and save valuable time.',
    studio_cta:   'DISCOVER CREATIVE STUDIO →',
    studio_badge: 'DESIGNED TO SAVE TIME. CREATED TO ELEVATE YOUR BRAND.',

    // Benefits
    benefit1_title: 'ELEVATE YOUR BRAND',
    benefit1_text:  'Strategic and aesthetic materials that reflect your unique vision.',
    benefit2_title: 'SAVE TIME AND ENERGY',
    benefit2_text:  'Ready-to-use templates that let you focus on what truly matters.',
    benefit3_title: 'STRATEGY WITH BEAUTY',
    benefit3_text:  'Every design comes with a strategic intention and attention to detail.',
    benefit4_title: 'MADE FOR FEMALE ENTREPRENEURS',
    benefit4_text:  'Resources created with empathy, elegance, and a real understanding.',
    benefit5_title: 'GROW WITH CONFIDENCE',
    benefit5_text:  'Tools that support your growth, your goals, and your freedom.',

    // Footer
    footer_tagline:    'Premium digital products for women with vision. One brand. One standard.',
    footer_nav_title:  'Navigation',
    footer_legal_title:'Legal',
    footer_privacy:    'Privacy Policy',
    footer_terms:      'Terms & Conditions',
    footer_refund:     'Refund Policy',
    footer_copy:       '© 2025 Femmora. All rights reserved.',
  }
};

// ── i18n Engine ───────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('femmora-lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('femmora-lang', lang);

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

// Language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Apply saved language on page load
applyLanguage(currentLang);

// ── Announcement Bar (hide on scroll) ─────────────────────────────────────────
const announcementBar = document.getElementById('announcementBar');
let lastScrollY = 0;

function handleAnnouncementBar() {
  if (window.scrollY > lastScrollY && window.scrollY > 60) {
    announcementBar && announcementBar.classList.add('hidden');
  } else if (window.scrollY < 50) {
    announcementBar && announcementBar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
}

// ── Navbar: transparent over hero, solid on scroll ───────────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (!navbar) return;
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);

  // Also track announcement bar visibility for navbar top offset
  const barHidden = window.scrollY > 80;
  navbar.classList.toggle('bar-hidden', barHidden);

  handleAnnouncementBar();
}

if (navbar) {
  updateNavbar(); // run once on load
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

// ── Mobile burger menu ────────────────────────────────────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// ── Scroll reveal (IntersectionObserver) ─────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Smooth scroll for anchor links ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 8 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Product card hover tilt (subtle 3D) ───────────────────────────────────────
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
