// Select the toggle button and icon
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeToggleMobile = document.querySelector('.theme-toggle-mobile');
const themeIconMobile = document.querySelector('.theme-icon-mobile');
const menuIcon = document.getElementById('menu-bar');
const closeIcon = document.getElementById('close_overlay');
const overlay = document.querySelector('#menu__overlay');






// Function to toggle between light and dark mode
function toogleDarkLightMode(icon) {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  // Update the icon based on the theme
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}
themeToggle.addEventListener('click', () => {
  toogleDarkLightMode(themeIcon)
});
themeToggleMobile.addEventListener('click', () => {
  toogleDarkLightMode(themeIconMobile)
});

// function to toogle overlay visibility
function toggleMenuOverlay() {
  overlay.classList.toggle("open")
}

// Set default mode
document.body.classList.add('light-mode');
closeIcon.addEventListener('click', toggleMenuOverlay)
menuIcon.addEventListener('click', toggleMenuOverlay)
