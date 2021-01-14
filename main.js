// use a class to organize everything in a modular way
class StopWatch {
    //  variable used avoid setting the start time more than once 
    static aux = 0;
    //  variable used to know at what time the user pressed the start button
    static startTime = 0;
    //  used to know when the user presses the stop button
    static timeStopped = 0;
    // difference in time from the point where the user pressed stop, to when he pressed start again
    static difAdded = 0;
    //  variable used to make sure that the user can only set the interval on the loop function once, avoiding unexpected behavior if the user presses the start button more than once
    static dontStartTwice = 0;
    constructor() {
        
    }

    // sets an interval to update the stopwatch as fast as it can asynchronously
    start(clock) {
        if (StopWatch.dontStartTwice === 0){
            this._interval = setInterval(this.loop, 0, clock);
        }
        StopWatch.dontStartTwice = 1;
    }

    get interval() {
        return this._interval;
    }

    // main method
    loop(clock) {
        // Calculates the difAdded(property), sets the StopWatch.timeStopped variable to number to avoid that this block executes more than once
        if(typeof StopWatch.timeStopped==="string") {
            let newTime = Date.now();
            StopWatch.timeStopped = Number(StopWatch.timeStopped);
            StopWatch.difAdded += (newTime - StopWatch.timeStopped);
        }
        // Uses aux(property)
        if (StopWatch.aux===0) {
            StopWatch.startTime = Date.now();
        }

        StopWatch.aux = 1;
        // calculates the time the app has been running, formatting it like a classic stopwatch(hours : minutes : seconds).
        let seconds = Math.floor((Date.now() - (StopWatch.startTime + StopWatch.difAdded))/1000);
        let minutes = Math.floor(seconds/60)
        let hours = Math.floor(minutes/60)
        if (seconds>59) {
            let multiplier = Math.floor(seconds/60)
            seconds = seconds - (multiplier*60);
        }

        if (minutes>59) {
            let multiplier = Math.floor(minutes/60)
            minutes = minutes - (multiplier*60);
        }

        if (seconds<10){
            seconds = "0" + seconds;
        }
        if (minutes<10){
            minutes = "0" + minutes;
        }

        if (hours<10){
            hours = "0" + hours;
        }

        clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }

    // clears the interval to stop the stopwatch and records the stop time in string format for it to be caught only once by the loop method. it does the same for dontStartTwice(property).
    stop(interval) {
        StopWatch.timeStopped = Date.now().toString();
        clearInterval(interval);
        StopWatch.dontStartTwice = 0;
    }

    // resets all conditions
    reset(interval, clock) {
        clearInterval(interval);
        clock.innerHTML = "0";
        StopWatch.aux = 0;
        StopWatch.startTime = 0;
        StopWatch.timeStopped = 0;
        StopWatch.difAdded = 0;
        StopWatch.dontStartTwice = 0;
    }
}

// hooks the HTML elements in order to set content and add event listeners
let clock = document.querySelector("p");
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")

// creates an instance of StopWatch class
const watch = new StopWatch(0);

// sets content and adds event listeners
start.addEventListener("click", function(){watch.start(clock)})
stop.addEventListener("click", function(){watch.stop(watch.interval)})
reset.addEventListener("click", function(){watch.reset(watch.interval, clock)})

