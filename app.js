const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const pass = document.getElementById('pass');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passError = document.getElementById('passError');

  nameError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";
  if (!form.checkValidity()) {
    e.preventDefault();
    isValid = false;
  }
  if (name.value.trim().length < 2) {
    nameError.textContent = "Имя должно быть длиннее 1 символа.";
    isValid = false;
  }
  if (!email.value.includes("@")) {
    emailError.textContent = "Некорректный email.";
    isValid = false;
  }
  if (pass.value.length < 6) {
    passError.textContent = "Пароль должен быть минимум 6 символов.";
    isValid = false;
  }
  if (!isValid) e.preventDefault();
});
