document.getElementById('year').textContent = new Date().getFullYear();

function handleContact(e) {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const service = f.service.value;
  const message = f.message.value.trim();
  const subject = encodeURIComponent('Portfolio contact — ' + service + ' — ' + name);
  const body = encodeURIComponent(message + '\n\nContact: ' + name + ' — ' + email);
  window.location = 'mailto:ikramelhilali21@gmail.com?subject=' + subject + '&body=' + body;
}

function downloadCV(e) {
  e.preventDefault();
  const cvUrl = 'assets/Ikram_CV.pdf';
  const a = document.createElement('a');
  a.href = cvUrl;
  a.download = 'Ikram_El_Hilali_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => {
    alert('If download failed, please email ikramelhilali21@gmail.com to request the CV.');
  }, 300);
}

/* scroll animation */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('section, .card, .project, .timeline-item').forEach(el => {
  observer.observe(el);
});

/* Smooth scroll for nav links */
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
