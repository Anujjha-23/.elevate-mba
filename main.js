function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.course-card, .faculty-card, .testi-card, .av-card, .about-feature, .why-item, .process-step, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

// Form submit
function handleSubmit(btn) {
  btn.textContent = '✓ Application Submitted!';
  btn.style.background = '#3a5a4a';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Submit Application →';
    btn.style.background = '';
    btn.style.color = '';
  }, 3500);
}

// Filter tabs
function filterCourses(category, tabEl) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  document.querySelectorAll('.course-card').forEach(card => {
    if (category === 'all' || card.dataset.cat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
