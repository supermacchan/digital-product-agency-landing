const contactModal = document.querySelector('.js-contact-modal');
const contactModalOpenBtn = document.querySelector('.js-contact-modal-open');
const contactModalCloseBtn = document.querySelector('.js-contact-modal-close');

contactModalOpenBtn.addEventListener('click', onContactModalOpen);
contactModalCloseBtn.addEventListener('click', onContactModalClose);

// window.addEventListener('click', (e) => {console.log(e.target)});

function onContactModalOpen(e) {
    contactModal.classList.remove('is-hidden');
    document.body.classList.add('contact-modal-opened');

    contactModal.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscape);
}

function onContactModalClose(e) {
    contactModal.classList.add('is-hidden');
    document.body.classList.remove('contact-modal-opened');

    contactModal.removeEventListener('click', onBackdropClick);
    window.removeEventListener('keydown', onEscape);
}

function onBackdropClick(e) {
    if (e.target !== e.currentTarget) {
        return;
    }
    onContactModalClose();
}

function onEscape(e) {
    const ESCAPE_KEY_CODE = 'Escape';
    if (e.code === ESCAPE_KEY_CODE) {
        onContactModalClose();
    }
}