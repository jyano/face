const onReady = () => {
  const header = document.querySelector('.site-header');
  const toTop = document.querySelector('.to-top');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Sticky header style change
  const updateHeader = () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Tilt effect
  const applyTilt = (el) => {
    let rect;
    const calc = (x, y) => {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (x - cx) / rect.width;
      const dy = (y - cy) / rect.height;
      const tiltX = dy * -10;
      const tiltY = dx * 10;
      el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    const reset = () => { el.style.transform = ''; };

    const onEnter = () => { rect = el.getBoundingClientRect(); };
    const onMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      calc(x, y);
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
    el.addEventListener('touchstart', onEnter, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', reset);
  };

  document.querySelectorAll('.tilt').forEach(applyTilt);

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navLinks?.classList.remove('open');
          navToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Back to top button
  const toggleTop = () => {
    if (window.scrollY > 500) toTop.classList.add('show');
    else toTop.classList.remove('show');
  };
  toggleTop();
  window.addEventListener('scroll', toggleTop, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile nav toggle
  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}