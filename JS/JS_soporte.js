document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('.faq h3');

    faqs.forEach(faq => {
        faq.addEventListener('click', function() {
            const answer = this.nextElementSibling; // Selecciona el siguiente elemento, que debería ser el <p>
            if (answer.style.display === 'block') {
                answer.style.display = 'none'; // Oculta el párrafo si ya está visible
            } else {
                answer.style.display = 'block'; // Muestra el párrafo
            }
        });
    });
});