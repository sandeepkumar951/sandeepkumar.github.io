/* ===============================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===============================
   NAVBAR STATE
================================ */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 80);
});

/* ===============================
   SCROLL REVEAL
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .project-card, .skill-card')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

/* ===============================
   NETFLIX-STYLE PROJECT FOCUS
================================ */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.project-card')
      .forEach(c => c !== card && c.classList.add('dim'));
  });

  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.project-card')
      .forEach(c => c.classList.remove('dim'));
  });
});
