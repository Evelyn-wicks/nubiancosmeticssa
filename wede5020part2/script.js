// Update year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple analytics tracking (optional)
function trackPageView() {
  console.log('Page view tracked:', window.location.pathname);
  // You can integrate with Google Analytics or another service here
}

// Track page view on load
window.addEventListener('load', trackPageView);

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  if (mainNav && menuToggle) {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  }
});