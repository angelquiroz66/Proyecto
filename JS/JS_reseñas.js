document.addEventListener('DOMContentLoaded', function() {
    const saveReviewButton = document.querySelector('.btn-primary'); // Botón "Guardar" en el modal
    const reviewTextArea = document.getElementById('review-text'); // Área de texto para la reseña
    const reviewsSection = document.querySelector('.reviews-section'); // Sección donde se mostrarán las reseñas

    // Manejar el evento de clic en el botón "Guardar" del modal
    saveReviewButton.addEventListener('click', function() {
        const reviewText = reviewTextArea.value.trim(); // Obtener el texto de la reseña y eliminar espacios en blanco

        if (reviewText) {
            // Crear un nuevo elemento para la reseña
            const newReview = document.createElement('div');
            newReview.classList.add('review', 'mt-3');
            newReview.innerHTML = `<p><strong>Usuario:</strong> ${reviewText}</p>`;

            // Agregar la nueva reseña a la sección de reseñas
            reviewsSection.appendChild(newReview);

            // Limpiar el área de texto
            reviewTextArea.value = '';

            // Cerrar el modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('reviewModal'));
            modal.hide();
        } else {
            // Mensaje de advertencia si no se ingresa texto
            alert('Escribe una reseña antes de guardar.');
        }
    });
});