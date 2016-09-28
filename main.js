'use strict';
/*
This javascript file utilizes the StopWatch constructor in script.js file to create an instance of StopWatch object.
This newly instantiated object gets access to public or exposed variables and functions.
        watchRunning, start(), pause(), reset(), timeSinceStarted()
*/

// DOM Elements
var clockFace = document.getElementById('clock-face'),
startButton = document.getElementById('start'),
pauseButton = document.getElementById('pause'),
resetButton = document.getElementById('reset');

// Instantiating StopWatch object.
var stopWatch = new StopWatch();
var interval, 
intervalTime = 1, 
formatTimeSize = 2,
timerRunning = false;

// Initial after reset face of the stop watch
var initializeWatch = function () {
    startButton.innerHTML = "Start";
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    timerRunning = false;
    interval = null;
    clockFace.innerHTML = formatTime(0);
}

var startTimer = function () {
    if(!timerRunning) {
        console.log("Timer started!");
        interval = setInterval( function () {
            clockFace.innerHTML = formatTime(stopWatch.timeSinceStarted());
        }, intervalTime);
        stopWatch.start();
        timerRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        resetButton.disabled = true;
    }
}

var pauseTimer = function () {
    if(timerRunning) {
        console.log("Timer paused.");
        stopWatch.pause();
        clearInterval(interval);
        interval = null;
        timerRunning = false;
        startButton.innerHTML = "Resume";
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = false;
    }
}

var resetTimer = function () {
    console.log("Timer reset.");
    stopWatch.pause();
    stopWatch.reset();
    clearInterval(interval);
    initializeWatch();
}

/*format the time in HH:SS:SS*/
var formatTime = function (time) {
    var hours = addLeadingZero(Math.floor(time / (60 * 60 * 1000)), formatTimeSize);
    time %= (60 * 60 * 1000);
    var minutes = addLeadingZero(Math.floor(time / (60 * 1000)), formatTimeSize);
    time %= (60 * 1000);
    var seconds = addLeadingZero(Math.floor(time / 1000), formatTimeSize);
    // var milliseconds = addLeadingZero(time % 1000, 3);
    return hours + " : " + minutes + " : " + seconds;
}


var addLeadingZero = function (time, size) {
    var appendedTime = "0000" + time;
    return appendedTime.substring(appendedTime.length - size);
}

// Event listeners on buttons click
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


