const zapisanyLogin = localStorage.getItem('zalogowanyUser');

function rozsunKarte() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

// 1. Ustawienie wyglądu paska zaraz po wejściu na stronę
const pokazLogin = document.getElementById('zalogowanyUser');

if (zapisanyLogin !== null) {
    // Jeśli użytkownik JEST zalogowany
    document.querySelector('.zaloguj-ikonka').style.display = 'none';
    document.querySelector('.zarejestruj-ikonka').style.display = 'none';
    document.querySelector('.user-menu').style.display = 'flex'; // używamy flex dla user-menu (według style.css)

    // Pokazujemy login użytkownika na pasku:
    if (pokazLogin) {
        pokazLogin.textContent = `Witaj, ${zapisanyLogin}!`;
        pokazLogin.style.display = 'block';
    }
} else {
    // Jeśli użytkownik NIE JEST zalogowany
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
        // Przekierowanie na logowanie
        window.location.href = "zaloguj-uczen.html";
    });
}