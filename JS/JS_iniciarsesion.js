// JS_iniciarsesion.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        authenticateUser (email, password);
    });
});

function authenticateUser (email, password) {
    const validEmail = "usuario@example.com";
    const validPassword = "contraseña123";

    
    if (email === validEmail && password === validPassword) {
        alert('Inicio de sesión exitoso!');
        
        window.location.href = '/Peliculas.html'; 
    } else {
        alert('Correo o contraseña incorrectos. Intenta de nuevo.');
    }
}