/* ═══════════════════════════════════════════════════════
   FAHD AHMED — PORTFOLIO  |  script.js
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Custom Cursor ──────────────────────────────────── */
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

let trailX = 0, trailY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
});

function animateTrail() {
  trailX += (cursorX - trailX) * 0.18;
  trailY += (cursorY - trailY) * 0.18;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

/* ── Nav Scroll State ───────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Hamburger / Mobile Menu ────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Intersection Observer — Reveal Animations ──────── */
const revealEls = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ── Skill Bar Animation ────────────────────────────── */
const skillGroups = document.querySelectorAll('.skill-group');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

skillGroups.forEach(group => skillObserver.observe(group));

/* ── Smooth Active Nav Link Highlighting ────────────── */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

/* ── Parallax Orbs on Mouse Move ────────────────────── */
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  if (orb1) orb1.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
  if (orb2) orb2.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
}, { passive: true });

/* ── Project Card Tilt ──────────────────────────────── */
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect  = card.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) / (rect.width  / 2);
    const dy    = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `translateY(-6px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Typed Text Hero Sub ────────────────────────────── */
// Subtle glitch on hero name on load
window.addEventListener('load', () => {
  const heroName = document.querySelector('.hero-name');
  if (!heroName) return;

  heroName.style.opacity = '0';
  heroName.style.transform = 'translateY(20px)';
  heroName.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  setTimeout(() => {
    heroName.style.opacity = '1';
    heroName.style.transform = 'translateY(0)';
  }, 300);
});

/* ── Counter Animation for Stats ────────────────────── */
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const increment = target / 40;
  const isDecimal = String(target).includes('.');
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
  }, 35);
}

const statsSection = document.querySelector('.about-stats');
let statsAnimated = false;

if (statsSection) {
  const statsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !statsAnimated) {
      statsAnimated = true;
      document.querySelectorAll('.stat-num').forEach(el => {
        const raw = el.textContent.trim();
        const num = parseFloat(raw);
        const suffix = raw.replace(/[\d.]/g, '');
        animateCounter(el, num, suffix);
      });
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

/* ── Scroll Progress Indicator ──────────────────────── */
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed; top: 0; left: 0; height: 2px; z-index: 600;
  background: var(--accent); width: 0%; transition: width 0.1s linear;
  transform-origin: left; pointer-events: none;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });
