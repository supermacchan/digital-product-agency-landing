const goUpBtn = document.querySelector('.up');

goUpBtn.addEventListener('click', onBtnClick);

function onBtnClick () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
