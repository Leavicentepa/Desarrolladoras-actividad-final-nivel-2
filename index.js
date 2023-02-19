function enviar(eventoEnviar) {
  // Evitar functionamiento por defecto.
  eventoEnviar.preventDefault()

  let nombreValido = false;
  let emailValido = false;
  let passwordValida = false;
  let confirmacionValida = false;
  let passwordsCoinciden = false;

  // Validar nombre
  let nombre = document.getElementById('nombre');

  if (nombre.value == "") {
    document.getElementById('error-nombre').innerText = "Rellene este campo.";
  } else if (nombre.checkValidity()) {
    document.getElementById('contenedor-nombre').style.border = "2px solid #4cc962";
    document.getElementById('imagen-nombre').src = "./images/success-icon.svg";
    document.getElementById('imagen-nombre').alt = "Icono éxito.";
    document.getElementById('error-nombre').innerText = "";
    nombreValido = true;
  } else {
    document.getElementById('contenedor-nombre').style.border = "2px solid #dc5a5a";
    document.getElementById('imagen-nombre').src = "./images/error-icon.svg";
    document.getElementById('imagen-nombre').alt = "Icono error";
    document.getElementById('error-nombre').innerText = "El nombre sólo debe contener letras.";
  }

  // Validar email
  let email = document.getElementById('email');

  if (email.value == "") {
    document.getElementById('error-email').innerText = "Rellene este campo.";
  } else if (email.checkValidity()) {
    document.getElementById('contenedor-email').style.border = "2px solid #4cc962";
    document.getElementById('imagen-email').src = "./images/success-icon.svg";
    document.getElementById('imagen-email').alt = "Icono éxito.";
    document.getElementById('error-email').innerText = "";
    emailValido = true;
  } else {
    document.getElementById('contenedor-email').style.border = "2px solid #dc5a5a";
    document.getElementById('imagen-email').src = "./images/error-icon.svg";
    document.getElementById('imagen-email').alt = "Icono error";
    document.getElementById('error-email').innerText = "Email inválido.";
  }

  // Validar contraseña
  let password = document.getElementById('password').value;

  if (password == "") {
    document.getElementById('error-password').innerText = "Rellene este campo.";
  } else if (password.length < 8) {
    document.getElementById('error-password').innerText = "Debe tener al menos 8 caracteres.";
  } else {
    document.getElementById('contenedor-password').style.border = "2px solid #4cc962";
    document.getElementById('imagen-password').src = "./images/success-icon.svg";
    document.getElementById('imagen-password').alt = "Icono éxito.";
    document.getElementById('error-password').innerText = "";
    passwordValida = true;
  }

  // Validar confirmación contraseña
  let passwordConfirmation = document.getElementById('password-confirmation').value;

  if (passwordConfirmation == "") {
    document.getElementById('error-confirmacion').innerText = "Rellene este campo.";
  } else {
    document.getElementById('error-confirmacion').innerText = "";
    confirmacionValida = true;
  }

  // Validar contraseña == confirmación
  if (passwordValida && confirmacionValida) {
    if (password === passwordConfirmation) {
      document.getElementById('contenedor-confirmacion').style.border = "2px solid #4cc962";
      document.getElementById('imagen-confirmacion').src = "./images/success-icon.svg";
      document.getElementById('imagen-confirmacion').alt = "Icono éxito.";
      passwordsCoinciden = true;
    } else {
      document.getElementById('error-confirmacion').innerText = "Las contraseñas no coinciden.";
    }
  }

  // Alerta de inscripción correcta
  if (nombreValido && emailValido && passwordValida && confirmacionValida && passwordsCoinciden) {
    alert('Inscripción corecta.')
  }
}