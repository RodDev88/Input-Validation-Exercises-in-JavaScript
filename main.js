//*************************************************
//TIPOS DE VALIDACIONES
//*************************************************

/* 5.NUMBER VALIDATION
document.getElementById("enviar").addEventListener("click", () => {
  const numero = document.getElementById("numero").value.trim();

  if (!numero) {
    // Validar si el campo está vacío
    alert("El campo es obligatorio. Por favor, ingresa un número.");
  } else if (isNaN(numero)) {
    // Validar si no es un número
    alert("Por favor, ingresa un valor numérico válido.");
  } else {
    // Caso válido
    alert("Número válido. ¡Formulario enviado!");
  }
});
 */
/* 4.PASSWORD MATCH
document.getElementById("enviar").addEventListener("click", () => {
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();

  // Validar si ambos campos están llenos
  if (!password1 || !password2) {
    alert("Ambos campos de contraseña son obligatorios.");
  } else if (password1 !== password2) {
    // Validar si las contraseñas coinciden
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  } else {
    // Si todo es válido
    alert("Contraseñas válidas. ¡Formulario enviado!");
  }
}); */

/* 3.MIN Y MAX LENGHT 
document.getElementById("enviar").addEventListener("click", () => {
  const inputTexto = document.getElementById("texto").value.trim(); // Elimina espacios en blanco al inicio y al final
  const minLength = 5; // Longitud mínima requerida
  const maxLength = 10; // Longitud máxima permitida

  // Validar longitud mínima
  if (inputTexto.length < minLength) {
    alert(`El texto debe tener al menos ${minLength} caracteres.`);
    return;
  }

  // Validar longitud máxima
  if (inputTexto.length > maxLength) {
    alert(`El texto no puede exceder los ${maxLength} caracteres.`);
    return;
  }

  alert("Texto válido. ¡Formulario enviado!");
}); */

/* 2.EMAIL 

document.getElementById("enviar").addEventListener("click", () => {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  // Validar si el campo está vacío
  if (email === "") {
    alert("Por favor, ingrese un correo electrónico.");
    return;
  }

  // Validar si el correo tiene un formato válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  alert("Correo válido. ¡Formulario enviado con éxito!");
});
 */

/*1. REQUIRED
document.getElementById("validar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    alert("El nombre es obligatorio");
  } else {
    alert("Nombre válido: " + nombre);
  }
});
 */
