const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const avatarEl = document.querySelector('.hero-avatar');

if (avatarEl) {
  avatarEl.addEventListener('error', () => {
    avatarEl.src =
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23dce7f7"/><stop offset="1" stop-color="%23f3f6fb"/></linearGradient></defs><rect width="100%" height="100%" rx="40" fill="url(%23g)"/><text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle" fill="%231f2f44" font-family="Arial,sans-serif" font-size="90" font-weight="700">BC</text></svg>';
  });
}

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 120, 360)}ms`;
    observer.observe(el);
  });
}
