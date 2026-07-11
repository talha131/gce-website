/*
 * Progressive-enhancement motion: scroll-reveal and animated count-up.
 * All motion is gated behind prefers-reduced-motion — when the user prefers
 * reduced motion, elements are shown immediately with no animation.
 */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.classList.add('is-visible');
  });
}

function setupReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  els.forEach((el) => io.observe(el));
}

function animateCount(el: HTMLElement) {
  const target = parseFloat(el.dataset.count ?? '0');
  const suffix = el.dataset.suffix ?? '';
  const prefix = el.dataset.prefix ?? '';
  const duration = 1600;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    // easeOutExpo
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    const value = Math.round(target * eased);
    el.textContent = prefix + value.toLocaleString('en-US') + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function setupCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;

  const finalText = (el: HTMLElement) =>
    (el.dataset.prefix ?? '') +
    Number(el.dataset.count ?? '0').toLocaleString('en-US') +
    (el.dataset.suffix ?? '');

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => (el.textContent = finalText(el)));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target as HTMLElement);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  els.forEach((el) => io.observe(el));
}

setupReveal();
setupCounters();
