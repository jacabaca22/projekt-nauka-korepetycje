// Przekierowanie do odpowiedniej strony w zależności od wyboru panelu
const przyciskStudent = document.getElementById('przycisk-student');
const przyciskTutor = document.getElementById('przycisk-tutor');
przyciskStudent.addEventListener('click', () => {
    window.location.href = "zaloguj-student.html";
});
przyciskTutor.addEventListener('click', () => {
    window.location.href = "zaloguj-tutor.html";
});