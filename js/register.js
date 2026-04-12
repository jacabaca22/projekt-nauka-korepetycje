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

function checkIfEmpty() {
  if (Login.value === '' || Password.value === '' || Email.value === '') {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}
function checkIfPatternIsGood() {
  const EmailOk = emailPattern.test(Email.value);
  const LoginOk = loginPattern.test(Login.value);
  const PasswordOk = passwordPattern.test(Password.value);
  if (!EmailOk || !LoginOk || !PasswordOk || Password.value != ConfirmPassword.value) {
    alert('Please enter valid information in all fields');
    return false;
  }
  return true;
}
if (PrzyciskDoRejestracji) {
  PrzyciskDoRejestracji.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkIfEmpty() !== false && checkIfPatternIsGood() !== false) {
      localStorage.setItem('zarejestrowanyUser', Login.value);
      localStorage.setItem('zarejestrowanyPassword', Password.value);
      localStorage.setItem('zarejestrowanyEmail', Email.value);
      localStorage.setItem('zarejestrowanyNumer', PhoneNumber.value);
      window.location.href = "zaloguj.html";
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (PrzyciskDoRejestracji) {
      event.preventDefault();
      PrzyciskDoRejestracji.click();
    }
  }

});