const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

const formStorage = {};
const KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onInputFeedback, 500));
refs.form.addEventListener('submit', onSubmitFeedback);

uniqueForm();

function onInputFeedback(event) {
    event.target.name === 'email' ? (formStorage.email = event.target.value) : (formStorage.message = event.target.value);
    try {
        localStorage.setItem(KEY, JSON.stringify(formStorage));
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

function onSubmitFeedback(event) {
    event.preventDefault();
    console.log(formStorage);
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
    console.log(localStorage);
}

function uniqueForm() {
  const saveData = localStorage.getItem(KEY);

  if (saveData) {
    try {
      const parseData = JSON.parse(saveData);
      refs.email.value = parseData.email;
      refs.message.value = parseData.message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}