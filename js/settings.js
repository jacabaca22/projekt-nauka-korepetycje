import { zapisDanychDoProfilu } from "./profile.js";
import { pokazywanieHasla } from "./profile.js"

const ZapisanyLogin = localStorage.getItem('zalogowanyUser');
const ZapisanyEmail = localStorage.getItem('zarejestrowanyEmail');
const ZapisanyNumer = localStorage.getItem('zarejestrowanyNumer');
const ZapisaneHaslo = localStorage.getItem('zarejestrowanyPassword');

function ZmienLogin() {
    const btnLogin = document.getElementById('zamien-login');
    btnLogin.addEventListener('click', () => {

    })
}
function ZmienEmail() {

}
function ZmienNumer() {

}
function ZmienHaslo() {

}
zapisDanychDoProfilu();
pokazywanieHasla();