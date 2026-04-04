function rozsunKarte(element) {
  element.classList.toggle('active');
}
const enterLogowanie = document.getElemendById('enter-Logowanie');
const Login = document.getElementById('Login');
const Password = document.getElementById('Password');
const Email = document.getElementById('Email');
function validateForm(){
  if (enterLogowanie.value === '') {
    alert('Please fill in all fields');
    return false;
  }
}