const zapisanyLogin = localStorage.getItem('zalogowanyUser');
const zapisanyEmail = localStorage.getItem('zalogowanyEmail');
const zapisanyNumer = localStorage.getItem('zalogowanyNumer');
const zapisaneHaslo = localStorage.getItem('zalogowaneHaslo')
if (zapisanyLogin !== null) {
    document.querySelector('.user-nickname').textContent = `Nazwa użytkownika: ${zapisanyLogin}`;
    document.querySelector('.user-nickname').style.display = 'block';
}

if (zapisanyEmail !== null) {
    document.querySelector('.user-email').textContent = `Email: ${zapisanyEmail}`;
    document.querySelector('.user-email').style.display = 'block';
}

if (zapisanyNumer !== null) {
    document.querySelector('.user-numer').textContent = `Numer telefonu: ${zapisanyNumer}`;
    document.querySelector('.user-numer').style.display = 'block';
}
if (zapisanyNumer == null) {
    document.querySelector('.user-numer').textContent = 'Numer telefonu : brak';
    document.querySelector('.user-numer').style.display = 'block';
}
if (zapisaneHaslo !== null) {
    document.querySelector('.user-haslo').textContent = `Hasło: ${zapisaneHaslo}`;
    document.querySelector('.user-haslo').style.display = 'block';
}