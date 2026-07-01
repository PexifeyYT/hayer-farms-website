// ═══════════════ Sticky navbar + hero logo animation ═══════════════
const navbar = document.getElementById('navbar');
const heroLogo = document.getElementById('hero-logo');
const onScroll = () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
  heroLogo.classList.toggle('scrolled', scrolled);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ═══════════════ Mobile menu ═══════════════
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ═══════════════ Scroll reveal ═══════════════
const revealEls = document.querySelectorAll('section:not(#hero), .gallery-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ═══════════════ Web3Forms contact submission ═══════════════
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.className = 'form-status';
  status.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const data = await response.json();

    if (response.ok && data.success) {
      status.className = 'form-status success';
      status.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    } else {
      status.className = 'form-status error';
      status.textContent = data.message || 'Something went wrong. Please try again.';
    }
  } catch (err) {
    status.className = 'form-status error';
    status.textContent = 'Network error. Please try again later.';
  } finally {
    submitBtn.disabled = false;
  }
});
