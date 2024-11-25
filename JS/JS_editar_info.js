document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    const emailInput = document.getElementById('emailInput');
    const usernameInput = document.getElementById('usernameInput');
    
    // Manejar el evento de clic en el botón "Guardar"
    saveButton.addEventListener('click', function() {
        const email = emailInput.value;
        const username = usernameInput.value;
        const password = document.getElementById('passwordInput').value; // Asegúrate de que el ID sea correcto

        // Aquí podrías agregar la lógica para enviar los datos a un servidor o guardarlos en localStorage
        console.log('Datos guardados:');
        console.log('Correo:', email);
        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);

        // Mensaje de éxito
        alert('Información guardada correctamente.');
    });

    // Manejar el evento de clic en el botón "Cancelar"
    cancelButton.addEventListener('click', function() {
        // Aquí puedes implementar la lógica para cancelar la edición
        // Por ejemplo, puedes limpiar los campos o redirigir a otra página
        emailInput.value = '';
        usernameInput.value = '';
        document.getElementById('passwordInput').value = ''; // Asegúrate de que el ID sea correcto
        alert('Edición cancelada.');
    });
});