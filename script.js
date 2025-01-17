// Select the toggle button and icon
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to toggle between light and dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Update the icon based on the theme
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

// Set default mode
document.body.classList.add('light-mode');
