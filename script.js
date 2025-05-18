// Toggle mobile menu (will work when we add media queries)
document.addEventListener('DOMContentLoaded', function() {
  const navButton = document.createElement('button');
  navButton.textContent = 'Menu';
  navButton.classList.add('mobile-menu-button');
  
  // Simple form validation example
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const email = document.getElementById('email').value;
      if (!email.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address');
      }
    });
  }
});
