// Navigation -----------------------------------------------------
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

// Function to toggle the menu visibility (show or hide)
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');  // Toggle the visibility of the nav
  }
  
  // Function to hide the menu
  function hideMenu() {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    nav.classList.remove('active');
    menuIcon.classList.remove('active'); // ← this is the key line you were missing
  }
  
  // Detect clicks outside the nav and menu icon
  document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Check if the clicked element is outside the nav and menu icon
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
      hideMenu();  // Hide the menu if clicked outside
    }
  });
  
  // Optional: Detect scroll and hide the menu
  window.addEventListener('scroll', hideMenu);
  
  function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
  
    // Toggle active class on nav element
    nav.classList.toggle('active');
    
    // Toggle the active class on the menu icon for visual feedback (optional)
    menuIcon.classList.toggle('active');
  }
  