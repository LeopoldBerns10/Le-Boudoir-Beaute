/* =============================================
   LE BOUDOIR BEAUTÉ — main.js
   ============================================= */
(function () {
  'use strict';

  /* ---- Burger / Mobile nav ---- */
  const burger    = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Mobile dropdown sub-menu */
  document.querySelectorAll('.mobile-dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const sub = trigger.nextElementSibling;
      if (sub) sub.classList.toggle('open');
    });
  });

  /* Desktop dropdown: keyboard + click fallback */
  document.querySelectorAll('.has-dropdown').forEach(item => {
    const trigger = item.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', item.classList.contains('open'));
      });
      document.addEventListener('click', e => {
        if (!item.contains(e.target)) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  /* ---- Hero scroll fade (pages prestations) ---- */
  const heroBg = document.querySelector('.hero-prestation-bg');
  if (heroBg) {
    const hero = heroBg.closest('.hero-prestation');
    const onScroll = () => {
      const rect     = hero.getBoundingClientRect();
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (hero.offsetHeight * 0.65)));
      heroBg.style.opacity = 1 - progress;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Fade-in on scroll (IntersectionObserver) ---- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  /* ---- Cookie consent ---- */
  const COOKIE_KEY = 'boudoir_cookies';
  const banner     = document.getElementById('cookie-banner');
  const btnAccept  = document.getElementById('cookie-accept');
  const btnRefuse  = document.getElementById('cookie-refuse');

  function activateConsented() {
    /* Unblock Google Maps iframes */
    document.querySelectorAll('iframe[data-src]').forEach(iframe => {
      iframe.src = iframe.getAttribute('data-src');
      iframe.removeAttribute('data-src');
      const blocked = iframe.closest('.map-wrapper')?.querySelector('.map-blocked');
      if (blocked) blocked.style.display = 'none';
    });

    /* Load Trustindex widget script */
    const tiEl = document.getElementById('trustindex-widget');
    if (tiEl && tiEl.dataset.scriptSrc) {
      const s = document.createElement('script');
      s.src   = tiEl.dataset.scriptSrc;
      s.async = true;
      document.head.appendChild(s);
    }
  }

  if (banner) {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === 'accepted') {
      activateConsented();
    } else if (!consent) {
      setTimeout(() => banner.classList.add('visible'), 1500);
    }

    btnAccept?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      banner.classList.remove('visible');
      activateConsented();
    });

    btnRefuse?.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'refused');
      banner.classList.remove('visible');
    });
  }

  /* ---- Galerie lightbox ---- */
  const galleries = document.querySelectorAll('.galerie-grid');
  if (galleries.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Photo en grand');
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Fermer">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Image précédente">&#8249;</button>' +
      '<img class="lightbox-img" src="" alt="">' +
      '<button class="lightbox-next" aria-label="Image suivante">&#8250;</button>';
    document.body.appendChild(overlay);

    const imgEl    = overlay.querySelector('.lightbox-img');
    const btnPrev  = overlay.querySelector('.lightbox-prev');
    const btnNext  = overlay.querySelector('.lightbox-next');
    const btnClose = overlay.querySelector('.lightbox-close');

    let currentList  = [];
    let currentIndex = 0;
    let lastFocused  = null;

    function show(index) {
      currentIndex = (index + currentList.length) % currentList.length;
      const img = currentList[currentIndex];
      imgEl.src = img.getAttribute('src');
      imgEl.alt = img.getAttribute('alt') || '';
      const multi = currentList.length > 1;
      btnPrev.style.display = multi ? '' : 'none';
      btnNext.style.display = multi ? '' : 'none';
    }

    function openLightbox(list, index) {
      currentList = list;
      lastFocused = document.activeElement;
      show(index);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      btnClose.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      imgEl.src = '';
      if (lastFocused) lastFocused.focus();
    }

    galleries.forEach(grid => {
      const imgs = Array.from(grid.querySelectorAll('.galerie-img'));
      imgs.forEach((img, i) => {
        const item = img.closest('.galerie-item') || img;
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        const altText = img.getAttribute('alt') || '';
        item.setAttribute('aria-label', altText ? 'Agrandir la photo : ' + altText : 'Agrandir la photo');
        item.addEventListener('click', () => openLightbox(imgs, i));
        item.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(imgs, i); }
        });
      });
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', () => show(currentIndex - 1));
    btnNext.addEventListener('click', () => show(currentIndex + 1));
    overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape')    closeLightbox();
      if (e.key === 'ArrowLeft')  show(currentIndex - 1);
      if (e.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  /* ---- Active nav link ---- */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-nav a, .dropdown-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (path.endsWith(href) && href !== '') a.classList.add('active');
    if ((path === '/' || path.endsWith('accueil.html')) && (href === 'accueil.html' || href === '../accueil.html')) {
      a.classList.add('active');
    }
  });

})();
