
//Rozsuwanie menu z profilem
function rozsunKarte() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

// Ustawienie wyglądu paska zaraz po wejściu na stronę
const pokazLogin = document.getElementById('zalogowanyUser');
const profilLogin = document.getElementsByClassName('user-nickname');
if (zapisanyLogin !== null) {
    // Jeśli użytkownik JEST zalogowany - znika logowanie i rejestracja
    document.querySelector('.zaloguj-ikonka').style.display = 'none';
    document.querySelector('.zarejestruj-ikonka').style.display = 'none';
    document.querySelector('.user-menu').style.display = 'flex'; // używamy flex dla user-menu (według style.css)

    // Pokazujemy login użytkownika na pasku:
    if (pokazLogin) {
        pokazLogin.textContent = `Witaj, ${zapisanyLogin}!`;
        document.querySelector('.user-nickname').textContent = `Nazwa użytkownika: ${zapisanyLogin}`;
        document.querySelector('.user-nickname').style.display = 'block';
    }
} else {
    // Jeśli użytkownik NIE JEST zalogowany - znika user menu
    document.querySelector('.zaloguj-ikonka').style.display = 'block';
    document.querySelector('.zarejestruj-ikonka').style.display = 'block';
    document.querySelector('.user-menu').style.display = 'none';

    // Ukrywamy pole loginu:
    if (pokazLogin) {
        pokazLogin.style.display = 'none';
    }
}

//  Akcja po kliknięciu "Wyloguj"
const kliknijWyloguj = document.getElementById('wyloguj');
if (kliknijWyloguj) {
    kliknijWyloguj.addEventListener('click', () => {
        //  usuwamy info o zalogowaniu z pamięci przeglądarki!
        localStorage.removeItem('zalogowanyUser');

        // Zmień wygląd tuż przed przejściem (choć zmiana strony i tak potrwa ułamek sekundy)
        document.querySelector('.zaloguj-ikonka').style.display = 'block';
        document.querySelector('.zarejestruj-ikonka').style.display = 'block';
        document.querySelector('.user-menu').style.display = 'none';
        document.querySelector(".nazwaUzytkownika").style.display = 'none';
        pokazLogin.style.display = 'none';

        window.location.href = "first-panel.html"
    });
}