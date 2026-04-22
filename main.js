// Navigation function
function goToPage(page) {
  window.location.href = page;
}

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when a nav button is clicked
    navLinks.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links button').forEach(function (btn) {
    const onclick = btn.getAttribute('onclick') || '';
    if (onclick.includes(currentPage)) {
      btn.classList.add('active');
    }
  });
});

// Animate hero infinitely
const hero = document.querySelector('.hero');

if (hero) {
  hero.classList.add('animate');
}
