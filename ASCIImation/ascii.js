"use strict";

let index = 0;
let currentAnimation;
let timer = null;
let startAnim;
let delay = 250;
let startB = document.getElementById("startButton");
startB.addEventListener("click", startEventHandler);

function startEventHandler() {
    toggleController('start');
    startAnim = document.getElementById("myTextArea");
    currentAnimation = startAnim.value;
    timer = setInterval(displayPattern, delay);
}

function displayPattern() {

    let frames = currentAnimation.split("=====\n");
    // console.log(frames);
    startAnim.value = frames[index];
    index++;
    if (index === frames.length)
        index = 0;
}

var stopB = document.getElementById("stopButton");
stopB.addEventListener("click", stopEventHandler);

function stopEventHandler() {
    toggleController('stop');
    clearInterval(timer);
    startAnim.value = ANIMATIONS[animButton.value];
}

var animButton = document.getElementById("animType");
animButton.addEventListener("change", animEventHandler);

function animEventHandler() {

    document.getElementById("myTextArea").value = ANIMATIONS[animButton.value];
}

// var sizeButton = document.getElementById("animSize");
// sizeButton.addEventListener("change", sizeEventHandler);
let animationSize = document.getElementById("animSize");
animationSize.addEventListener("change", sizeEventHandler);

function sizeEventHandler() {
    // let sizeArray = ["tiny", "small", "medium", "large", "xl", "xxl"];
    // sizeArray.forEach(element => {
    //     if (animationSize.classList.contains(element)) {
    //         animationSize.classList.remove(element);
    //     }
    // })
    // animationSize.classList.add(animationSize.value);
    var newSize = document.getElementById("animSize").value;
    document.getElementById("myTextArea").style.fontSize = newSize;
}


var speedButton = document.getElementById("animSpeed");
speedButton.addEventListener("change", speedEventHandler);

function speedEventHandler() {
    if (speedButton.checked) {
        delay = 50;
        clearInterval(timer)
        timer = setInterval(displayPattern, delay);
    } else {
        delay = 250;
        clearInterval(timer);
        timer = setInterval(displayPattern, delay);
    }
}

function toggleController(state) {
    if (state == 'start') {
        startButton.disabled = true;
        stopButton.disabled = false;
        animButton.disabled = true;
    } else if (state == 'stop') {
        startButton.disabled = false;
        stopButton.disabled = true;
        animButton.disabled = false;
    }
}