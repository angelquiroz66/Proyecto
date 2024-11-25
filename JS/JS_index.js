// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos de los selectores
    const orderSelect = document.getElementById("orderSelect");
    const genreSelect = document.getElementById("genreSelect");
    const yearSelect = document.getElementById("yearSelect");

    // Manejar cambios en los selectores
    orderSelect.addEventListener("change", function () {
        console.log("Orden seleccionado: " + this.value);
        // Aquí puedes agregar la lógica para ordenar las películas
    });

    genreSelect.addEventListener("change", function () {
        console.log("Género seleccionado: " + this.value);
        // Aquí puedes agregar la lógica para filtrar por género
    });

    yearSelect.addEventListener("change", function () {
        console.log("Año seleccionado: " + this.value);
        // filtro por año
    });

    // Carrusel - Inicializar el carrusel si es necesario
    const carousel = new bootstrap.Carousel(document.getElementById('carouselMovies'), {
        interval: 3000, // Cambiar cada 3 segundos
        wrap: true // Permitir que el carrusel vuelva al inicio
    });
});