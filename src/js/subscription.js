import Notiflix from 'notiflix';

const form = document.querySelector(".subscription__form");
const subscriptionInput = document.querySelector(".subscription__input");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    Notiflix.Notify.success(
        'You have successfully subscribed to our newsletters!',
        {
            timeout: 4000,
            borderRadius: '35px',
            fontSize: '16px',
            width: '300px',
            fontFamily: 'Raleway'
        }
    );
    subscriptionInput.value = '';
}