// JS will run after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // === MOBILE MENU BUTTON ===
  const navButton = document.createElement('button');
  navButton.textContent = 'Menu';
  navButton.classList.add('mobile-menu-button');
  document.body.insertBefore(navButton, document.querySelector('nav'));

  const nav = document.querySelector('nav');
  nav.style.display = 'none'; // Hide by default for mobile simulation

  navButton.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  });

  // === FORM VALIDATION ===
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

  // === TOGGLE CONTENT ===
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Show More';
  toggleButton.style.margin = '2em 0';
  toggleButton.classList.add('toggle-btn');

  const toggleText = document.createElement('div');
  toggleText.textContent = 'This is some extra information that you can choose to show or hide!';
  toggleText.style.display = 'none';
  toggleText.style.padding = '1em';
  toggleText.style.border = '1px solid #ccc';
  toggleText.style.borderRadius = '8px';

  const main = document.querySelector('main');
  if (main) {
    main.appendChild(toggleButton);
    main.appendChild(toggleText);
  }

  toggleButton.addEventListener('click', function() {
    const isHidden = toggleText.style.display === 'none';
    toggleText.style.display = isHidden ? 'block' : 'none';
    toggleButton.textContent = isHidden ? 'Show Less' : 'Show More';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const enterButton = document.getElementById('enter-button');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');

  enterButton.addEventListener('click', function () {
    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';
  });
});

