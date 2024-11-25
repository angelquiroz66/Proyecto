// script.js

document.addEventListener("DOMContentLoaded", function() {
    const genreSelect = document.querySelector('select[aria-label="Género"]');
    const yearSelect = document.querySelector('select[aria-label="Año"]');
    const movieCards = document.querySelectorAll('.movie-card');
  
    function filterMovies() {
      const selectedGenre = genreSelect.value;
      const selectedYear = yearSelect.value;
  
      movieCards.forEach(card => {
        const cardText = card.querySelector('img').alt; // Asumiendo que el alt de la imagen contiene información relevante
  
        const genreMatch = selectedGenre === "Género" || cardText.includes(selectedGenre);
        const yearMatch = selectedYear === "Año" || cardText.includes(selectedYear);
  
        if (genreMatch && yearMatch) {
          card.parentElement.style.display = 'block'; // Muestra la tarjeta si coincide
        } else {
          card.parentElement.style.display = 'none'; // Oculta la tarjeta si no coincide
        }
      });
    }
  
    genreSelect.addEventListener('change', filterMovies);
    yearSelect.addEventListener('change', filterMovies);
  });