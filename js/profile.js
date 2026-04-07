const zapisanyLogin = localStorage.getItem('zalogowanyUser');
const zapisanyEmail = localStorage.getItem('zarejestrowanyEmail');
const zapisanyNumer = localStorage.getItem('zarejestrowanyNumer');
const zapisaneHaslo = localStorage.getItem('zarejestrowanyPassword');

// 1. Podstawowe dane
function zapisDanychDoProfilu() {
    if (zapisanyLogin) {
        document.querySelector('.user-nickname').textContent = `Nazwa użytkownika: ${zapisanyLogin}`;
    }

    if (zapisanyEmail) {
        document.querySelector('.user-email').textContent = `Email: ${zapisanyEmail}`;
    }

    const numerElement = document.querySelector('.user-numer');
    if (zapisanyNumer) {
        numerElement.textContent = `Numer telefonu: ${zapisanyNumer}`;
    } else {
        numerElement.textContent = 'Numer telefonu: brak';
    }
}

const btn = document.getElementById('toggle-view');
const display = document.getElementById('password-display');
let isHidden = true;
function pokazywanieHasla() {
    if (zapisaneHaslo && display) {
        // Na start ustawiamy gwiazdki
        display.textContent = "Hasło : " + "*".repeat(zapisaneHaslo.length);

        btn.addEventListener('click', () => {
            if (isHidden) {
                display.textContent = "Hasło : " + zapisaneHaslo;
                btn.src = "../../img/crossed-out-eye.png";
            } else {
                display.textContent = "Hasło : " + "*".repeat(zapisaneHaslo.length);
                btn.src = "../../img/eye.jpg";
            }
            isHidden = !isHidden;
        });
    }
}
pokazywanieHasla();
zapisDanychDoProfilu();