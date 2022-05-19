'use strict'
let container = document.querySelector(".timer");
let timerInput = document.querySelector("#time"); 
let buttonRun = document.querySelector("#button-start");
let buttonStop = document.querySelector("#button-stop");
let buttonClear = document.querySelector("#button-clear");
let timerShow = document.querySelector("#timer");
let timer;
let timeMinute;
let timeNow = 0;
let pause;

buttonRun.addEventListener('click', timeOut);
buttonStop.addEventListener('click', stop);
buttonClear.addEventListener('click', clear);

function timeOut() {
    pause = false;
    timeNow > 0 ? timeMinute = timeNow : timeMinute = timerInput.value*600;

    return timer = setInterval (function () {
        let seconds = timeMinute/10%60;
        let minutes = timeMinute/10/60%60;
        let hours = timeMinute/10/60/60%60;

        let str = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
        timerShow.innerHTML = str;
        buttonRun.removeEventListener('click', timeOut);
        timeNow = timeMinute;

        setTimeout(function(){
            buttonClear.style.display = 'block';
        }, 30);

    if(timeMinute < 1 || pause) {
        clearInterval(timer);
        buttonRun.addEventListener('click', timeOut);
    }

    --timeMinute;
    }, 100);
};


function stop() {
    return pause = true;
};

buttonClear.style.display = 'none';

function clear() {
    buttonRun.addEventListener('click', timeOut);
    clearInterval(timer);
    timerShow.innerHTML = '';
    timerInput.value = '';
    timeNow = 0;
};


