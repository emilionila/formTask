const REGISTER_FORM = document.forms.registration;
const EMAIL_FIELD = document.getElementById('email');
const SUBMIT_BTN = document.getElementById('submit');
const MODAL = document.querySelector('.modal');
const CANCEL_BTN = document.querySelector('.cancel');
const CONFIRM_BTN = document.querySelector('.confirm');
const form = document.querySelector('.form');
const message = document.querySelector('.message');


REGISTER_FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    const regData = new RegisterData(EMAIL_FIELD.value);
    renderData(regData);
})

function RegisterData(email) {
    this.email = email;
}

function renderData() {
    MODAL.style.display = 'block';
    addData();
}

let GMAIL_DATA = document.querySelector('.gmail-data');

function addData(){
    GMAIL_DATA.innerText = EMAIL_FIELD.value;
}

SUBMIT_BTN.addEventListener('click', ()=>{
    MODAL.style.display = 'block';
});

CANCEL_BTN.addEventListener('click', ()=>{
    MODAL.style.display = 'none';
})

CONFIRM_BTN.addEventListener('click', ()=>{
    MODAL.style.display = 'none';
    form.style.display = 'none';
    message.style.display = 'block';
})