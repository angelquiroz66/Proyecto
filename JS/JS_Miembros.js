// script.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-form input[type="search"]');
    const miembrosList = document.querySelectorAll('.miembro-item');
  
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      miembrosList.forEach(member => {
        const memberName = member.querySelector('span').textContent.toLowerCase();
        if (memberName.includes(searchTerm)) {
          member.style.display = 'flex'; // Muestra el miembro si coincide
        } else {
          member.style.display = 'none'; // Oculta el miembro si no coincide
        }
      });
    });
  });