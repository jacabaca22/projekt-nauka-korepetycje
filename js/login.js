import { ikonaPoprawnaRejestracja } from "./register.js";


const PrzyciskDoLogowaniaStudent = document.getElementById('enter-logowanie-student');
const PrzyciskDoLogowaniaTutor = document.getElementById('enter-logowanie-tutor');
const Login = document.getElementById('Login');
const Password = document.getElementById('Password');
const rawData = localStorage.setItem('registered-user-data');
const registeredUser = JSON.parse(rawData);
if (!rawData) {
  alert('No users yet!');
  return false;
}

function validateForm() {

  // SPRAWDZANIE PATTERNÓW DLA LOGIN,HASLO,
  // SPRAWDZANIE CZY LOGIN I HASLO SIE ZGADZAJA Z TYM CO JEST ZAREJESTROWANE W LOCAL STORAGE
  const LoginOk = loginPattern.test(Login.value);
  const PasswordOk = passwordPattern.test(Password.value);
  const DataFromRegistration = localStorage.getItem('registered-user-data');



  if (Login.value != zarejestrowanyUser || Password.value != zarejestrowanyPassword) {
    alert('No user found with the provided login or password.');
    return false;
  }
  else {
    const loggedUser = {
      login: Login.value,
      loginTime: new Date().toLocaleString(), // Dodatek: wiesz, kiedy user wszedł
      // 
    }
    localStorage.setItem('logged-user-data', JSON.stringify(loggedUser))
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
