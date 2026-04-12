const PrzyciskDoLogowaniaStudent = document.getElementById('enter-logowanie-student');
const PrzyciskDoLogowaniaTutor = document.getElementById('enter-logowanie-tutor');
const Login = document.getElementById('Login');
const Password = document.getElementById('Password');


function validateForm() {

  // SPRAWDZANIE PATTERNÓW DLA LOGIN,HASLO,
  // SPRAWDZANIE CZY LOGIN I HASLO SIE ZGADZAJA Z TYM CO JEST ZAREJESTROWANE W LOCAL STORAGE
  const LoginOk = loginPattern.test(Login.value);
  const PasswordOk = passwordPattern.test(Password.value);
  const zarejestrowanyUser = localStorage.getItem('zarejestrowanyUser');
  const zarejestrowanyPassword = localStorage.getItem('zarejestrowanyPassword');
  const zarejestrowanyEmail = localStorage.getItem('zarejestrowanyEmail');


  if (Login.value != zarejestrowanyUser || Password.value != zarejestrowanyPassword) {
    alert('No user found ewith the provided login or password.');
    return false;
  }
  else {
    localStorage.setItem('zalogowanyUser', Login.value);
    localStorage.setItem('zalogowanyPassword', Password.value);
    return true;
  }
}

if (PrzyciskDoLogowaniaTutor) {
  PrzyciskDoLogowaniaTutor.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "index.html";
    }
  });
}
if (PrzyciskDoLogowaniaStudent) {
  PrzyciskDoLogowaniaStudent.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "index.html";
    }
  });
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (PrzyciskDoLogowaniaTutor) {
      event.preventDefault();
      PrzyciskDoLogowaniaTutor.click();
    }
    if (PrzyciskDoLogowaniaStudent) {
      event.preventDefault();
      PrzyciskDoLogowaniaStudent.click();
    }
  }
});
