const goUpBtn = document.querySelector('.up');

goUpBtn.addEventListener('click', onBtnClick);

function onBtnClick () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

SmoothScroll({
    stepSize: 175,
    animationTime: 800,
    accelerationDelta: 200,
    accelerationMax: 6,
    keyboardSupport: true,
    arrowScroll: 100,
  });