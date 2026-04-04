  const PrzyciskDoLogowania = document.getElementById('enter-logowanie'); 
        const Login = document.getElementById('Login');
        const Password = document.getElementById('Password');
        const loginPattern = /^[a-zA-Z0-9]{3,20}$/;
        const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
        
        
         function validateForm(){
        const LoginOk = loginPattern.test(Login.value);
        const PasswordOk = passwordPattern.test(Password.value);
        const zarejestrowanyUser = localStorage.getItem('zarejestrowanyUser');
        const zarejestrowanyPassword = localStorage.getItem('zarejestrowanyPassword');


            
  if (Login.value === '' || Password.value === '') {
    alert('Please fill in all fields');
    return false;
  }
  else if(Login.value != zarejestrowanyUser || Password.value != zarejestrowanyPassword){
                alert('No user found with the provided login. Please register first.');
                return false;
            }
  else if (!LoginOk || !PasswordOk) {
    alert('Please enter valid information in all fields');
    return false;
  }
  else{
    localStorage.setItem('zalogowanyUser', Login.value);
    localStorage.setItem('zalogowanyPassword', Password.value);
    window.location.href = "index.html";
    return true;
  }
}
PrzyciskDoLogowania.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});