/* SMOOTH SCROLL */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* NAVBAR DARKEN */
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 80
    ? 'rgba(0,0,0,0.95)'
    : 'rgba(0,0,0,0.6)';
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .card, .project-card')
  .forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

/* 3D PROJECT TILT */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -(y - rect.height/2) / 18;
    const ry = (x - rect.width/2) / 18;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
