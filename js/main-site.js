
//Rozsuwanie menu z profilem
function rozsunKarte() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

// Ustawienie wyglądu paska zaraz po wejściu na stronę
const zapisanyLogin = localStorage.getItem('zalogowanyUser');
const zapisanyNumer = localStorage.getItem('zarejestrowanyNumer')
const zapisanyEmail = localStorage.getItem('zarejestrowanyEmail');

const pokazLogin = document.getElementById('zalogowanyUser');
function zmianaWygladuPaska() {
    if (zapisanyLogin != null) {
        // Jeśli użytkownik JEST zalogowany - znika logowanie i rejestracja TU TRZEBA JESZCZE ZMIENIĆ
        if (document.querySelector('.zaloguj-ikonka')) document.querySelector('.zaloguj-ikonka').style.display = 'none';
        if (document.querySelector('.zarejestruj-ikonka')) document.querySelector('.zarejestruj-ikonka').style.display = 'none';
        if (document.querySelector('.user-menu')) document.querySelector('.user-menu').style.display = 'flex';

        // Pokazujemy login użytkownika na pasku:
        if (pokazLogin) {
            pokazLogin.textContent = `Witaj, ${zapisanyLogin}!`;
        }
        const nicknameEl = document.getElementById('.user-nickname');
        const numberEl = document.getElementById('.user-number');
        const emailEl = document.getElementById('.user-email');
        if (numberEl) {
            numberEl.textContent = `Numer telefonu: ${zapisanyNumer}`;
            numberEl.style.display = 'block';
        }
        if (emailEl) {
            emailEl.textContent = `Email: ${zapisanyEmail}`;
            emailEl.style.display = 'block';
        }
    } else {
        // Jeśli użytkownik NIE JEST zalogowany - znika user menu
        if (document.querySelector('.zaloguj-ikonka')) document.querySelector('.zaloguj-ikonka').style.display = 'block';
        if (document.querySelector('.zarejestruj-ikonka')) document.querySelector('.zarejestruj-ikonka').style.display = 'block';
        if (document.querySelector('.user-menu')) document.querySelector('.user-menu').style.display = 'none';

        // Ukrywamy pole loginu:
        if (pokazLogin) {
            pokazLogin.style.display = 'none';
        }
    }
}
const kliknijWyloguj = document.getElementById('wyloguj');

if (kliknijWyloguj) {
    kliknijWyloguj.addEventListener('click', () => {
        //  usuwamy info o zalogowaniu z pamięci przeglądarki
        localStorage.removeItem('zalogowanyUser');

        // Zmień wygląd tuż przed przejściem
        document.querySelector('.zaloguj-ikonka').style.display = 'block';
        document.querySelector('.zarejestruj-ikonka').style.display = 'block';
        document.querySelector('.user-menu').style.display = 'none';
        document.querySelector(".nazwaUzytkownika").style.display = 'none';
        pokazLogin.style.display = 'none';

        window.location.href = "first-panel.html"
    });
}
zmianaWygladuPaska();