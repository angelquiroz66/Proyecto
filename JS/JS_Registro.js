// JS_Registro.js

const form = document.querySelector(".register-card");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const securityQuestion = document.querySelector("#security-question").value;
  const securityAnswer = document.querySelector(
    "input[name='security-answer']"
  ).value.trim();

  if (!email || !username || !password || !securityAnswer) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  const userData = {
    email,
    username,
    password,
    securityQuestion,
    securityAnswer,
  };

  try {
    const response = await fetch("register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Registro exitoso.");
      window.location.href = "/Iniciar sesion.html";
    } else {
      alert(result.message || "Hubo un error en el registro.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error en el servidor. Intenta nuevamente.");
  }
});
