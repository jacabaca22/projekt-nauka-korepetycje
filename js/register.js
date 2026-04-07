const PrzyciskDoRejestracjiStudent = document.getElementById('enter-rejestracja-student');
const PrzyciskDoRejestracjiTutor = document.getElementById('enter-rejestracja-tutor');
const Login = document.getElementById('Login');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const Email = document.getElementById('Email');
const PhoneNumber = document.getElementById('PhoneNumber')
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const loginPattern = /^[a-zA-Z0-9]{3,20}$/;
const passwordPattern = /^(?=.*[A-Z]).{8,}$/;


//Sprawdzenie czy e-mail,login haslo sa zgodne z patternem i czy hasla sa takie same
function validateForm() {
  const EmailOk = emailPattern.test(Email.value);
  const LoginOk = loginPattern.test(Login.value);
  const PasswordOk = passwordPattern.test(Password.value);
  if (Login.value === '' || Password.value === '' || Email.value === '') {
    alert('Please fill in all fields');
    return false;
  }
  else if (!EmailOk || !LoginOk || !PasswordOk || Password.value != ConfirmPassword.value) {
    alert('Please enter valid information in all fields');
    return false;
  }
  else {
    localStorage.setItem('zarejestrowanyUser', Login.value);
    localStorage.setItem('zarejestrowanyPassword', Password.value);
    localStorage.setItem('zarejestrowanyEmail', Email.value);
    localStorage.setItem('zarejestrowanyNumer', PhoneNumber.value);
    return true;
  }
}

// Przekierowanie do odpowiedniej strony w zależności od wyboru panelu
if (PrzyciskDoRejestracjiStudent) {
  PrzyciskDoRejestracjiStudent.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "zaloguj-student.html";
    }
  });
}
if (PrzyciskDoRejestracjiTutor) {
  PrzyciskDoRejestracjiTutor.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "zaloguj-tutor.html";
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (PrzyciskDoRejestracjiTutor) {
      event.preventDefault();
      PrzyciskDoRejestracjiTutor.click();
    }
    if (PrzyciskDoRejestracjiStudent) {
      event.preventDefault();
      PrzyciskDoRejestracjiStudent.click();
    }
  }
});