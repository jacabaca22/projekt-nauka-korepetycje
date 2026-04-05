// Przekierowanie do odpowiedniej strony w zależności od wyboru panelu
const przyciskUczen = document.getElementById('przycisk-uczen');
const przyciskKorepetytor = document.getElementById('przycisk-korepetytor');
przyciskUczen.addEventListener('click', () => {
    window.location.href = "zaloguj-uczen.html";
});
przyciskKorepetytor.addEventListener('click', () => {
    window.location.href = "zaloguj-korepetytor.html";
});