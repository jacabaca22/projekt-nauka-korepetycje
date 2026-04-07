const PrzyciskDoLogowaniaUczen = document.getElementById('enter-logowanie-uczen');
const PrzyciskDoLogowaniaKorepetytor = document.getElementById('enter-logowanie-korepetytor');
const Login = document.getElementById('Login');
const Password = document.getElementById('Password');
const loginPattern = /^[a-zA-Z0-9]{3,20}$/;
const passwordPattern = /^(?=.*[A-Z]).{8,}$/;


function validateForm() {

  // SPRAWDZANIE PATTERNÓW DLA LOGIN,HASLO,
  // SPRAWDZANIE CZY LOGIN I HASLO SIE ZGADZAJA Z TYM CO JEST ZAREJESTROWANE W LOCAL STORAGE
  const LoginOk = loginPattern.test(Login.value);
  const PasswordOk = passwordPattern.test(Password.value);
  const zarejestrowanyUser = localStorage.getItem('zarejestrowanyUser');
  const zarejestrowanyPassword = localStorage.getItem('zarejestrowanyPassword');



  if (Login.value === '' || Password.value === '') {
    alert('Please fill in all fields');
    return false;
  }
  else if (Login.value != zarejestrowanyUser || Password.value != zarejestrowanyPassword) {
    alert('No user found with the provided login. Please register first.');
    return false;
  }
  else if (!LoginOk || !PasswordOk) {
    alert('Please enter valid information in all fields');
    return false;
  }
  else {
    localStorage.setItem('zalogowanyUser', Login.value);
    localStorage.setItem('zalogowanyPassword', Password.value);
    return true;
  }
}

if (PrzyciskDoLogowaniaKorepetytor) {
  PrzyciskDoLogowaniaKorepetytor.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "index-tutor.html";
    }
  });
}
if (PrzyciskDoLogowaniaUczen) {
  PrzyciskDoLogowaniaUczen.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "index-student.html";
    }
  });
}
