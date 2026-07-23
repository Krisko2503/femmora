/* ====================================================================
   FEMMORA -- main.js
   Navbar scroll / Logo CSS state / Mobile menu / Hero fade-out
   FAQ accordion / Scroll reveal / Newsletter form
   i18n -- Bulgarian / Spanish (default) / English
==================================================================== */

'use strict';

// Translation Dictionary
const translations = {
  bg: {
    nav_home:      'НАЧАЛО',
    nav_about:     'ЗА НАС',
    nav_shop:      'МАГАЗИН',
    nav_resources: 'РЕСУРСИ',
    nav_reviews:   'ОТЗИВИ',
    nav_letters:   'ПИСМА',
    hero_eyebrow:    '✦ ДИГИТАЛНИ РЕСУРСИ И ИНСТРУМЕНТИ ЗА ЖЕНИ ПРЕДПРИЕМАЧИ ✦',
    hero_line1:      'Изгради бизнеса.',
    hero_line2:      'Създай бранда.',
    hero_line3:      'Стани Жената.',
    hero_sub:        'Премиум дигитални инструменти, стратегия и мислене, за да изградиш бизнес, който наистина обичаш.',
    hero_btn_explore:'РАЗГЛЕДАЙ КОЛЕКЦИЯТА →',
    hero_btn_story:  'НАШАТА ИСТОРИЯ',
    divider_main: 'ДИГИТАЛНИ РЕСУРСИ И ИНСТРУМЕНТИ ЗА ЖЕНИ ПРЕДПРИЕМАЧИ',
    divider_sub:  'Стратегия, дизайн и мислене, за да изградиш бизнеса, който обичаш.',
    pillars_eyebrow: 'ТРИТЕ СТЪЛБА',
    pillars_title:   'Всичко, от което се нуждаеш, за да се издигнеш.',
    pillar1_name: 'Business', pillar1_tag: 'Изгради бизнеса.',
    pillar1_li1: 'Стратегически рамки за бизнес',
    pillar1_li2: 'Ръководства за планиране на приходи',
    pillar1_li3: 'Шаблони за стартиране',
    pillar1_li4: 'Ценообразуване и архитектура на оферти',
    pillar1_li5: 'Маркетингови и съдържателни планове',
    pillar2_name: 'Creative Studio', pillar2_tag: 'Създай бранда.',
    pillar2_li1: 'Шаблони за бранд идентичност',
    pillar2_li2: 'Дизайн комплекти за социални мрежи',
    pillar2_li3: 'Ресурси за Canva и Figma',
    pillar2_li4: 'Ръководства за mood board',
    pillar2_li5: 'Инструменти за визуален разказ',
    pillar3_name: 'CEO', pillar3_tag: 'Стани жената.',
    pillar3_li1: 'CEO дневници за мислене',
    pillar3_li2: 'Планировчици за сутрешен ритуал',
    pillar3_li3: 'Работа с увереност и идентичност',
    pillar3_li4: 'Лидерски рамки',
    pillar3_li5: 'Картографиране на визия и наследство',
    pillar_explore_btn: 'РАЗГЛЕДАЙ →',
    mission_eyebrow: 'НАШАТА МИСИЯ',
    mission_quote: 'Помагаме на жените да изграждат бизнес с цел и да станат жените, за които са предназначени.',
    mission_body1: 'Femmora е повече от магазин — това е движение за жени, които отказват да избират между амбиция и елегантност. Вярваме, че твоят бизнес трябва да отразява цялата сила на това кой си.',
    mission_body2: 'Всеки ресурс, който създаваме, е проектиран с намерение. От стратегически ръководства, до брандиращи инструменти, до CEO дневници, които укрепват твоя вътрешен свят.',
    mission_cta: 'НАУЧИ ПОВЕЧЕ ЗА НАС →',
    mission_badge_est: 'ОСН.',
    faq_eyebrow: 'ВЪПРОСИ И ОТГОВОРИ',
    faq_title:   'Всичко, за което се чудеше.',
    faq1_q: 'Какви видове продукти предлага Femmora?',
    faq1_a: 'Femmora предлага премиум дигитални ресурси, включително ръководства за бизнес стратегия, шаблони за бранд идентичност, CEO дневници за мислене, маркетингови планове и готови Canva комплекти. Всички продукти са достъпни за незабавно изтегляне.',
    faq2_q: 'За кого са предназначени продуктите на Femmora?',
    faq2_a: 'Femmora е създадена за жени предприемачи на всеки етап — независимо дали тепърва започваш, мащабираш до шест цифри или ребрандираш. Ако искаш стратегия, красота и CEO мислене на едно място, ти си у дома.',
    faq3_q: 'Как да получа продуктите си след покупка?',
    faq3_a: 'Веднага след плащане ще получиш имейл с линк за изтегляне. Всички продукти се доставят като висококачествени PDF файлове или редактируеми Canva/Figma файлове.',
    faq4_q: 'Предлагате ли възстановяване на средства за дигитални продукти?',
    faq4_a: 'Поради дигиталния характер на нашите продукти, всички продажби са окончателни. Ако обаче срещнете технически проблем, нашият екип за поддръжка е тук, за да помогне.',
    faq5_q: 'Какво е Femmora Letters?',
    faq5_a: 'Femmora Letters е нашият седмичен бюлетин — смес от бизнес стратегия, прозрения за мислене, вдъхновение за бранд и ексклузивни оферти само за абонати. Твоят личен ментор, доставен директно в пощата ти.',
    reviews_eyebrow: 'ОТЗИВИ',
    reviews_title:   'ОБИЧАНА ОТ ЖЕНИ',
    reviews_title_em:'КАК ТЕБ',
    review1_text: '"Femmora напълно промени начина, по който управлявам моя бранд. Шаблоните са елегантни, професионални и ми спестиха седмици работа. Най-накрая се чувствам като CEO, за която винаги съм искала да бъда."',
    review1_name: 'Sofia M.',
    review1_role: 'Бранд стратег, Лондон',
    review2_text: '"Пробвала съм толкова много планировчици и ресурси. Нищо не може да се сравни с дълбочината и красотата на това, което предлага Femmora. Само CEO дневникът промени цялата ми сутрешна рутина и мислене."',
    review2_name: 'Alejandra R.',
    review2_role: 'Онлайн коуч, Маями',
    review3_text: '"От момента, в който открих Femmora, знаех, че това е различно. Те не са просто шаблони — те са цялостна система да стана жената и предприемача, за каквато винаги съм bila предназначена."',
    review3_name: 'Natalie K.',
    review3_role: 'Творчески директор, Париж',
    newsletter_eyebrow: 'ПРИСЪЕДИНИ СЕ КЪМ ВЪТРЕШНИЯ КРЪГ',
    newsletter_desc: 'Седмично вдъхновение, стратегия и инструменти доставени в пощата ти. Без шум — само това, от което се нуждае жена, изграждаща своята империя.',
    newsletter_perk1: '✦ Ексклузивни отстъпки само за абонати',
    newsletter_perk2: '✦ Седмични бизнес стратегически прозрения',
    newsletter_perk3: '✦ Ранен достъп до нови продукти',
    newsletter_perk4: '✦ CEO мислене и лайфстайл съдържание',
    newsletter_placeholder: 'Твоят имейл адрес',
    newsletter_btn: 'АБОНИРАЙ СЕ',
    newsletter_consent: 'С абонирането се съгласяваш с Политиката за поверителност. Отпиши се по всяко време.',
    newsletter_success: '✦ Добре дошла в семейството на Femmora! Провери пощата си.',
    footer_tagline: 'Премиум дигитални ресурси за жени предприемачи. Стратегия, дизайн и мислене на едно място.',
    footer_col_shop: 'МАГАЗИН',
    footer_shop_business: 'Femmora Business', footer_shop_creative: 'Creative Studio',
    footer_shop_ceo: 'Femmora CEO', footer_shop_all: 'Всички продукти', footer_shop_new: 'Новости',
    footer_col_resources: 'РЕСУРСИ',
    footer_res_free: 'Безплатни изтегляния', footer_res_blog: 'Блог',
    footer_res_podcast: 'Подкаст', footer_res_letters: 'Femmora Letters',
    footer_col_company: 'КОМПАНИЯ',
    footer_co_about: 'За нас', footer_co_press: 'Преса',
    footer_co_affiliates: 'Партньори', footer_co_contact: 'Контакт',
    footer_col_legal: 'ПРАВНА ИНФОРМАЦИЯ',
    footer_legal_privacy: 'Политика за поверителност', footer_legal_terms: 'Общи условия',
    footer_legal_refund: 'Политика за връщане', footer_legal_cookies: 'Политика за бисквитки',
    footer_copy:  '© 2025 Femmora Studio. Всички права запазени.',
    footer_motto: 'Изгради бизнеса. Създай бранда. Стани Жената.'
  },

  es: {
    nav_home: 'INICIO', nav_about: 'NOSOTRAS', nav_shop: 'TIENDA',
    nav_resources: 'RECURSOS', nav_reviews: 'RESEÑAS', nav_letters: 'CARTAS',
    hero_eyebrow: '✦ RECURSOS DIGITALES & HERRAMIENTAS PARA EMPRENDEDORAS ✦',
    hero_line1: 'Diseña tu visión.', hero_line2: 'Construye tu marca.', hero_line3: 'Eleva tu vida.',
    hero_sub: 'Herramientas digitales premium, estrategia y mentalidad para ayudarte a construir un negocio que verdaderamente amas.',
    hero_btn_explore: 'EXPLORAR LA COLECCIÓN →', hero_btn_story: 'NUESTRA HISTORIA',
    divider_main: 'RECURSOS DIGITALES & HERRAMIENTAS PARA EMPRENDEDORAS',
    divider_sub:  'Estrategia, diseño y mentalidad para construir el negocio que amas.',
    pillars_eyebrow: 'LOS TRES PILARES', pillars_title: 'Todo lo que necesitas para elevarte.',
    pillar1_name: 'Business', pillar1_tag: 'Construye el negocio.',
    pillar1_li1: 'Marcos de estrategia empresarial',
    pillar1_li2: 'Guías de planificación de ingresos',
    pillar1_li3: 'Plantillas de lanzamiento',
    pillar1_li4: 'Precios y arquitectura de ofertas',
    pillar1_li5: 'Hojas de ruta de marketing y contenido',
    pillar2_name: 'Creative Studio', pillar2_tag: 'Diseña la marca.',
    pillar2_li1: 'Plantillas de identidad de marca',
    pillar2_li2: 'Kits de diseño para redes sociales',
    pillar2_li3: 'Recursos de Canva y Figma',
    pillar2_li4: 'Guías de mood board',
    pillar2_li5: 'Herramientas de narrativa visual',
    pillar3_name: 'CEO', pillar3_tag: 'Conviértete en la mujer.',
    pillar3_li1: 'Diarios de mentalidad CEO',
    pillar3_li2: 'Planificadores de rituales matutinos',
    pillar3_li3: 'Trabajo de confianza e identidad',
    pillar3_li4: 'Marcos de liderazgo',
    pillar3_li5: 'Mapeo de visión y legado',
    pillar_explore_btn: 'EXPLORAR →',
    mission_eyebrow: 'NUESTRA MISIÓN',
    mission_quote: 'Ayudamos a las mujeres a construir negocios con propósito y a convertirse en las mujeres que están destinadas a ser.',
    mission_body1: 'Femmora es más que una tienda — es un movimiento para mujeres que se niegan a elegir entre ambición y elegancia. Creemos que tu negocio debe reflejar todo el poder de quien eres.',
    mission_body2: 'Cada recurso que creamos está diseñado con intención. Desde guías de estrategia que clarifican tu visión, hasta herramientas de marca que te hacen lucir inconfundiblemente profesional, hasta diarios CEO que fortalecen tu mundo interior.',
    mission_cta: 'SABER MÁS SOBRE NOSOTRAS →',
    mission_badge_est: 'EST.',
    faq_eyebrow: 'PREGUNTAS & RESPUESTAS', faq_title: 'Todo lo que has estado preguntando.',
    faq1_q: '¿Qué tipos de productos ofrece Femmora?',
    faq1_a: 'Femmora ofrece recursos digitales premium que incluyen guías de estrategia empresarial, plantillas de identidad de marca, diarios de mentalidad CEO, hojas de ruta de marketing y kits de Canva listos para usar. Todos los productos son de descarga inmediata.',
    faq2_q: '¿Para quién están diseñados los productos de Femmora?',
    faq2_a: 'Femmora está creado para emprendedoras en cada etapa — ya sea que estés comenzando, escalando a seis cifras o haciendo un rebranding. Si quieres estrategia, belleza y mentalidad CEO en un solo lugar, estás en casa.',
    faq3_q: '¿Cómo accedo a mis productos después de la compra?',
    faq3_a: 'Inmediatamente después del pago, recibirás un correo electrónico con tu enlace de descarga. Todos los productos se entregan como PDFs de alta resolución o archivos editables de Canva/Figma. Tus herramientas están listas en el momento en que las necesitas.',
    faq4_q: '¿Ofrecen reembolsos en productos digitales?',
    faq4_a: 'Debido a la naturaleza digital de nuestros productos, todas las ventas son definitivas. Sin embargo, si experimentas algún problema técnico para acceder a tu compra, nuestro equipo de soporte está aquí para ayudarte. Respaldamos la calidad de todo lo que creamos.',
    faq5_q: '¿Qué es Femmora Letters?',
    faq5_a: 'Femmora Letters es nuestro boletín semanal — una mezcla curada de estrategia empresarial, perspectivas de mentalidad, inspiración de marca y ofertas exclusivas para suscriptoras. Tu mentora personal, entregada directamente a tu bandeja de entrada.',
    reviews_eyebrow: 'TESTIMONIOS', reviews_title: 'AMADA POR MUJERES', reviews_title_em: 'COMO TÚ',
    review1_text: '"Femmora transformó completamente cómo gestiono mi marca. Las plantillas son elegantes, profesionales y me ahorraron semanas de trabajo. Por fin me siento la CEO que siempre quise ser."',
    review1_name: 'Sofia M.', review1_role: 'Estratega de Marca, Londres',
    review2_text: '"He probado tantos planificadores y recursos. Nada se compara con la profundidad y belleza de lo que ofrece Femmora. El diario CEO por sí solo cambió toda mi rutina matutina y mentalidad."',
    review2_name: 'Alejandra R.', review2_role: 'Coach Online, Miami',
    review3_text: '"Desde el momento en que descubrí Femmora, supe que esto era diferente. Estas no son solo plantillas — son un sistema completo para convertirme en la mujer y empresaria que siempre estuve destinada a ser."',
    review3_name: 'Natalie K.', review3_role: 'Directora Creativa, París',
    newsletter_eyebrow: 'ÚNETE AL CÍRCULO ÍNTIMO',
    newsletter_desc: 'Inspiración semanal, estrategia y herramientas entregadas a tu bandeja de entrada. Sin ruido — solo lo que una mujer que construye su imperio verdaderamente necesita.',
    newsletter_perk1: '✦ Descuentos exclusivos para suscriptoras',
    newsletter_perk2: '✦ Perspectivas semanales de estrategia empresarial',
    newsletter_perk3: '✦ Acceso prioritario a nuevos lanzamientos',
    newsletter_perk4: '✦ Contenido de mentalidad CEO y estilo de vida',
    newsletter_placeholder: 'Tu dirección de email',
    newsletter_btn: 'SUSCRIBIRME',
    newsletter_consent: 'Al suscribirte aceptas nuestra Política de Privacidad. Cancela cuando quieras.',
    newsletter_success: '✦ ¡Bienvenida a la familia Femmora! Revisa tu bandeja de entrada.',
    footer_tagline: 'Recursos digitales premium para emprendedoras. Estrategia, diseño y mentalidad en un solo lugar.',
    footer_col_shop: 'TIENDA',
    footer_shop_business: 'Femmora Business', footer_shop_creative: 'Creative Studio',
    footer_shop_ceo: 'Femmora CEO', footer_shop_all: 'Todos los Productos', footer_shop_new: 'Novedades',
    footer_col_resources: 'RECURSOS',
    footer_res_free: 'Descargas Gratuitas', footer_res_blog: 'Blog',
    footer_res_podcast: 'Podcast', footer_res_letters: 'Femmora Letters',
    footer_col_company: 'EMPRESA',
    footer_co_about: 'Sobre Nosotras', footer_co_press: 'Prensa',
    footer_co_affiliates: 'Afiliadas', footer_co_contact: 'Contacto',
    footer_col_legal: 'LEGAL',
    footer_legal_privacy: 'Política de Privacidad', footer_legal_terms: 'Términos y Condiciones',
    footer_legal_refund: 'Política de Reembolso', footer_legal_cookies: 'Política de Cookies',
    footer_copy: '© 2025 Femmora Studio. Todos los derechos reservados.',
    footer_motto: 'Construye el negocio. Diseña la marca. Conviértete en la Mujer.'
  },

  en: {
    nav_home: 'HOME', nav_about: 'ABOUT', nav_shop: 'SHOP',
    nav_resources: 'RESOURCES', nav_reviews: 'REVIEWS', nav_letters: 'LETTERS',
    hero_eyebrow: '✦ DIGITAL RESOURCES & TOOLS FOR WOMEN ENTREPRENEURS ✦',
    hero_line1: 'Build the business.', hero_line2: 'Design the brand.', hero_line3: 'Become the Woman.',
    hero_sub: 'Premium digital tools, strategy and mindset to help you build a business you truly love.',
    hero_btn_explore: 'EXPLORE THE COLLECTION →', hero_btn_story: 'OUR STORY',
    divider_main: 'DIGITAL RESOURCES & TOOLS FOR WOMEN ENTREPRENEURS',
    divider_sub:  'Strategy, design and mindset to build a business you love.',
    pillars_eyebrow: 'THE THREE PILLARS', pillars_title: 'Everything you need to rise.',
    pillar1_name: 'Business', pillar1_tag: 'Build the business.',
    pillar1_li1: 'Business strategy frameworks',
    pillar1_li2: 'Revenue planning guides',
    pillar1_li3: 'Launch blueprint templates',
    pillar1_li4: 'Pricing & offer architecture',
    pillar1_li5: 'Marketing & content roadmaps',
    pillar2_name: 'Creative Studio', pillar2_tag: 'Design the brand.',
    pillar2_li1: 'Brand identity templates',
    pillar2_li2: 'Social media design kits',
    pillar2_li3: 'Canva & Figma resources',
    pillar2_li4: 'Mood board guides',
    pillar2_li5: 'Visual storytelling tools',
    pillar3_name: 'CEO', pillar3_tag: 'Become the woman.',
    pillar3_li1: 'CEO mindset journals',
    pillar3_li2: 'Morning ritual planners',
    pillar3_li3: 'Confidence & identity work',
    pillar3_li4: 'Leadership frameworks',
    pillar3_li5: 'Vision & legacy mapping',
    pillar_explore_btn: 'EXPLORE →',
    mission_eyebrow: 'OUR MISSION',
    mission_quote: "We help women build businesses with purpose and become the women they're meant to be.",
    mission_body1: "Femmora is more than a shop — it's a movement for women who refuse to choose between ambition and elegance. We believe your business should reflect the full power of who you are.",
    mission_body2: "Every resource we create is designed with intention. From strategy guides that clarify your vision, to brand tools that make you look unmistakably professional, to CEO journals that strengthen your inner world.",
    mission_cta: 'LEARN MORE ABOUT US →',
    mission_badge_est: 'EST.',
    faq_eyebrow: 'QUESTIONS & ANSWERS', faq_title: "Everything you've been wondering.",
    faq1_q: 'What types of products does Femmora offer?',
    faq1_a: 'Femmora offers premium digital resources including business strategy guides, brand identity templates, CEO mindset journals, marketing roadmaps, and done-for-you Canva kits. All products are instantly downloadable.',
    faq2_q: 'Who are Femmora products designed for?',
    faq2_a: "Femmora is built for women entrepreneurs at every stage — whether you're just starting, scaling to six figures, or rebranding. If you want strategy, beauty, and a CEO mindset in one place, you're home.",
    faq3_q: 'How do I access my products after purchase?',
    faq3_a: "Immediately after checkout, you'll receive an email with your download link. All products are delivered as high-resolution PDFs or editable Canva/Figma files. Your tools are ready the moment you need them.",
    faq4_q: 'Do you offer refunds on digital products?',
    faq4_a: 'Due to the digital nature of our products, all sales are final. However, if you experience any technical issues accessing your purchase, our support team is here to help. We stand behind the quality of everything we create.',
    faq5_q: 'What is Femmora Letters?',
    faq5_a: 'Femmora Letters is our weekly newsletter — a curated blend of business strategy, mindset insights, brand inspiration, and exclusive subscriber-only offers. Your personal mentor, delivered straight to your inbox.',
    reviews_eyebrow: 'TESTIMONIALS', reviews_title: 'LOVED BY WOMEN', reviews_title_em: 'LIKE YOU',
    review1_text: '"Femmora completely transformed how I approach my brand. The templates are elegant, professional, and saved me weeks of work. I finally feel like the CEO I\'ve always wanted to be."',
    review1_name: 'Sofia M.', review1_role: 'Brand Strategist, London',
    review2_text: '"I\'ve tried so many planners and resources. Nothing compares to the depth and beauty of what Femmora offers. The CEO journal alone changed my entire morning routine and mindset."',
    review2_name: 'Alejandra R.', review2_role: 'Online Coach, Miami',
    review3_text: '"From the moment I discovered Femmora, I knew this was different. These aren\'t just templates — they\'re a complete system for becoming the woman and entrepreneur I was always meant to be."',
    review3_name: 'Natalie K.', review3_role: 'Creative Director, Paris',
    newsletter_eyebrow: 'JOIN THE INNER CIRCLE',
    newsletter_desc: 'Weekly inspiration, strategy and tools delivered to your inbox. No noise — only what a woman building her empire truly needs.',
    newsletter_perk1: '✦ Exclusive subscriber-only discounts',
    newsletter_perk2: '✦ Weekly business strategy insights',
    newsletter_perk3: '✦ First access to new product drops',
    newsletter_perk4: '✦ CEO mindset & lifestyle content',
    newsletter_placeholder: 'Your email address',
    newsletter_btn: 'SUBSCRIBE',
    newsletter_consent: 'By subscribing you agree to our Privacy Policy. Unsubscribe anytime.',
    newsletter_success: '✦ Welcome to the Femmora family! Check your inbox.',
    footer_tagline: 'Premium digital resources for women entrepreneurs. Strategy, design and mindset in one place.',
    footer_col_shop: 'SHOP',
    footer_shop_business: 'Femmora Business', footer_shop_creative: 'Creative Studio',
    footer_shop_ceo: 'Femmora CEO', footer_shop_all: 'All Products', footer_shop_new: 'New Arrivals',
    footer_col_resources: 'RESOURCES',
    footer_res_free: 'Free Downloads', footer_res_blog: 'Blog',
    footer_res_podcast: 'Podcast', footer_res_letters: 'Femmora Letters',
    footer_col_company: 'COMPANY',
    footer_co_about: 'About Us', footer_co_press: 'Press',
    footer_co_affiliates: 'Affiliates', footer_co_contact: 'Contact',
    footer_col_legal: 'LEGAL',
    footer_legal_privacy: 'Privacy Policy', footer_legal_terms: 'Terms & Conditions',
    footer_legal_refund: 'Refund Policy', footer_legal_cookies: 'Cookie Policy',
    footer_copy: '© 2025 Femmora Studio. All rights reserved.',
    footer_motto: 'Build the business. Design the brand. Become the Woman.'
  }
};

// ── setLanguage ───────────────────────────────────────────────────────────────
function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('femmora-lang', lang);
}

// ── Language Switcher Events ──────────────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLanguage(btn.getAttribute('data-lang')); }
  });
});

// ── Init from localStorage, default to 'es' ───────────────────────────────────
const savedLang = localStorage.getItem('femmora-lang') || 'es';
setLanguage(savedLang);


// ── Navbar scroll ─────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}

if (navbar) {
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

// ── Hero fade-out ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const calcOpacity = 1 - (window.scrollY / 600);
    hero.style.opacity = Math.max(calcOpacity, 0);
  }
});

// ── Mobile burger menu ────────────────────────────────────────────────────────
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Close menu');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (burger && mobileMenu) {
  // Single button toggles open/close
  burger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close when any nav link is clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close when any lang button inside the mobile menu is clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu();
  });
}


// ── Smooth scroll ─────────────────────────────────────────────────────────────
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

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const delay = Math.max(0, siblings.indexOf(entry.target) * 80);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answer     = document.getElementById(btn.getAttribute('aria-controls'));
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const a = document.getElementById(b.getAttribute('aria-controls'));
      if (a) a.classList.remove('open');
    });
    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      if (answer) answer.classList.add('open');
    }
  });
});

// ── Newsletter Form ───────────────────────────────────────────────────────────
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
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    form.reset();
  });
}

// ── Pillar card hover lift ────────────────────────────────────────────────────
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

// ── Review card micro-tilt ────────────────────────────────────────────────────
document.querySelectorAll('.review-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});