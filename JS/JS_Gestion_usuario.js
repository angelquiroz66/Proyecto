// script.js

// Función para cargar la información del usuario desde localStorage
function loadUser Info() {
    const email = localStorage.getItem('userEmail') || 'MigueLuis69@hotmail.com';
    const username = localStorage.getItem('username') || 'MigueLuis69';
    const password = localStorage.getItem('password') || '********';

    // Asignar los valores a los campos de entrada
    document.querySelector('input[type="text"][value="MigueLuis69@hotmail.com"]').value = email;
    document.querySelector('input[type="text"][value="MigueLuis69"]').value = username;
    document.querySelector('input[type="password"]').value = password;
}

// Función para habilitar la edición de la información del usuario
function enableEdit() {
    const emailInput = document.querySelector('input[type="text"][value="MigueLuis69@hotmail.com"]');
    const usernameInput = document.querySelector('input[type="text"][value="MigueLuis69"]');
    const passwordInput = document.querySelector('input[type="password"]');

    emailInput.disabled = false;
    usernameInput.disabled = false;
    passwordInput.disabled = false;

    // Cambiar el ícono de editar a confirmar
    const editButton = document.querySelector('.edit-section h4 .edit-icon a');
    editButton.innerHTML = '✔'; // Cambiar a un ícono de confirmar
    editButton.setAttribute('onclick', 'saveChanges()'); // Cambiar la función llamada
}

// Función para guardar los cambios realizados
function saveChanges() {
    const emailInput = document.querySelector('input[type="text"][value="MigueLuis69@hotmail.com"]');
    const usernameInput = document.querySelector('input[type="text"][value="MigueLuis69"]');
    const passwordInput = document.querySelector('input[type="password"]');

    // Guardar los cambios en localStorage
    localStorage.setItem('userEmail', emailInput.value);
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('password', passwordInput.value);

    // Deshabilitar los campos nuevamente
    emailInput.disabled = true;
    usernameInput.disabled = true;
    passwordInput.disabled = true;

    // Cambiar el ícono de confirmar de nuevo a editar
    const editButton = document.querySelector('.edit-section h4 .edit-icon a');
    editButton.innerHTML = '✎'; // Cambiar de nuevo a un ícono de editar
    editButton.setAttribute('onclick', 'enableEdit()'); // Cambiar la función llamada
}

// Agregar event listeners a los elementos
document.addEventListener('DOMContentLoaded', () => {
    loadUser Info(); // Cargar la información del usuario al iniciar
    const editIcon = document.querySelector('.edit-section h4 .edit-icon a');
    editIcon.addEventListener('click', enableEdit);
});