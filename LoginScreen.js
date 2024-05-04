const form = document.querySelector('form');
const username = document.getElementsByClassName('input-boxUsername');
const password  = document.getElementsByClassName('input-boxPassword');
const paragrafo = document.querySelector('p');
paragrafo.style.textAlign = 'center';
paragrafo.style.fontFamily = 'Shadows Into Light';
paragrafo.style.fontWeight = 'bold';

form.onsubmit = function (e){
    if(username[0].value === '' || password[0].value === '' ){
        e.preventDefault(); //non mandare il form
        paragrafo.textContent = 'You missing something. You need to fill both! '
    }

}
