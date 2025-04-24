// Získání hamburger menu a navLinks
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Funkce pro přepnutí 'active' třídy na navLinks
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
