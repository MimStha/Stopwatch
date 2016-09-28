'use strict';

/*
StopWatch Object constructor. (Template for creating other StopWatch object)
Allows easy creation of StopWatch object with access to exposed (public) functions.
*/
function StopWatch () {

//private variables
var startTime = 0,
elapsedTime = 0;  // this stores the time until paused


/* Updates startTime to current milliseconds, (1474839078994)*/
var start = function () {
	if(startTime === 0) {
		startTime = Date.now();
	}
};

/*pauses the stop watch and hold the time stamp when it was paused*/
var pause = function (){
	elapsedTime = startTime ? (elapsedTime + Date.now() - startTime) : elapsedTime;
	startTime = 0;  // set startTime to 0 
}

/*reset counters, startTime and elapsedTime to 0*/
var reset = function () {
	startTime = 0;
	elapsedTime = 0;
}

/*returns the time since the stop watch ran*/
var timeSinceStarted = function () {
	return elapsedTime + (startTime ? (Date.now() - startTime) : 0);
}

//Exposing functions
return {
	start: start,
	pause: pause,
	reset: reset,
	timeSinceStarted: timeSinceStarted
};
}