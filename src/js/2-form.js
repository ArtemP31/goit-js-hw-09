// const { fromJSON } = require("postcss");

const formData = {
    email: "",
    message: ""
};
const localStorageKey = 'feedback-form-state';
// const STORAGE_KEY = 'feedback-text';
// const STORAGE_EMAIL = 'feedback-email';

const form = document.querySelector('.feedback-form');
const textArea = form.querySelector('.feedback-message');
const textEmail = form.querySelector('.feedback-email');


form.addEventListener('submit', handelForm);

function handelForm(event){
    event.preventDefault();
    const form = event.currentTarget;
    if (textArea.value === '' || textEmail.value === ''){
        alert('Fill all fields!!');
    };
    form.reset();
};

textArea.addEventListener('input',handlerTextMessage);

function handlerTextMessage(event){
    formData.message = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

textEmail.addEventListener('input', handlerTextEmail);

function handlerTextEmail(event){
    formData.email = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

const informationFromLocal= JSON.parse(localStorage.getItem(localStorageKey));

textArea.value = informationFromLocal.message;
textEmail.value = informationFromLocal.email;
formData.email = informationFromLocal.email;
formData.message = informationFromLocal.message;
console.log(formData);
// console.log(informationFromLocal);

