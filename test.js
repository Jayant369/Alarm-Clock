// HOURS
var hrsLeftCurrent = document.querySelector('.hrs-left-dialer-current');
var hrsLeftNext = document.querySelector('.hrs-left-dialer-next');
var hrsRightCurrent = document.querySelector('.hrs-right-dialer-current');
var hrsRightNext = document.querySelector('.hrs-right-dialer-next');

// MINUTES
var minLeftCurrent = document.querySelector('.min-left-dialer-current');
var minLeftNext = document.querySelector('.min-left-dialer-next');
var minRightCurrent = document.querySelector('.min-right-dialer-current');
var minRightNext = document.querySelector('.min-right-dialer-next');

// SECONDS
var currentSecondsRight = document.querySelector('.currentSecondsRight');
var nextSecondsRight = document.querySelector('.digit-dialer-right');
var currentSecondsLeft = document.querySelector('.currentSecondsLeft');
var nextSecondsLeft = document.querySelector('.digit-dialer-left');

// AM or PM
var amPMLeftCurrent = document.querySelector('.amPM-left-dialer-current');
var amPMLeftNext = document.querySelector('.amPM-left-dialer-next');
var amPMRightCurrent = document.querySelector('.amPM-right-dialer-current');
var amPMRightNext = document.querySelector('.amPM-right-dialer-next');

var secondsInterval, minutesInterval, hoursInterval, amPMInterval;

var rtClock = new Date();

var hours = rtClock.getHours();
var minutes = rtClock.getMinutes();
var seconds = rtClock.getSeconds();

// current hours left
var tempHours = hours;
tempHours = ("0" + tempHours).slice(-2, -1);
hrsLeftCurrent.innerHTML = tempHours;

// current minutes left
var tempMinutes = minutes;
tempMinutes = ("0" + tempMinutes).slice(-2, -1);
minLeftCurrent.innerHTML = tempMinutes;

// current seconds left
var tempSeconds = seconds;
tempSeconds = ("0" + tempSeconds).slice(-2, -1);
currentSecondsLeft.innerHTML = tempSeconds;


// Show AM or PM  
var amPm = (hours < 12) ? "AM" : "PM";
console.log(amPm);

var temp = amPm.slice(-2, -1);
amPMLeftCurrent.innerHTML = temp;
amPMRightCurrent.innerHTML = amPm.slice(-1);

hours = ("0" + hours).slice(-1);
minutes = ("0" + minutes).slice(-1);
seconds = ("0" + seconds).slice(-1);

// current hours right
hrsRightCurrent.innerHTML = hours;

// current minutes right
minRightCurrent.innerHTML = minutes; 

// current seconds right
currentSecondsRight.innerHTML = seconds;


function clock(){

    secondsInterval = setInterval(runSecondsClock, 1000);
    minutesInterval = setInterval(runMinutesClock, 1000);
    hoursInterval = setInterval(runHoursClock, 1000);

}
 

// SECONDS FUNCTIONALITY

var secondsCounter = seconds;
var tempSecondsCounter = tempSeconds;

// Here tempSeconds and secponds are fixed for every interval
function runSecondsClock(){

    if(secondsCounter < 10){

        if(secondsCounter == 9){

            secondsCounter = -1;

            if(tempSecondsCounter > 4){
                tempSecondsCounter = 0;
                nextSecondsLeft.innerHTML = tempSecondsCounter;
                currentSecondsLeft.innerHTML = "";
                nextSecondsLeft.classList.add('digit-dialer-left-animate');
            }
            else{
                nextSecondsLeft.innerHTML = ++tempSecondsCounter;
                currentSecondsLeft.innerHTML = "";
                nextSecondsLeft.classList.add('digit-dialer-left-animate');
            }

        }

        nextSecondsRight.innerHTML = ++secondsCounter;
    }
    
    currentSecondsRight.innerHTML = "";
    nextSecondsRight.classList.add('digit-dialer-right-animate');

    setTimeout(function(){

            currentSecondsRight.innerHTML = secondsCounter;
            nextSecondsRight.classList.remove('digit-dialer-right-animate');
    
            currentSecondsLeft.innerHTML = tempSecondsCounter;
            nextSecondsLeft.classList.remove('digit-dialer-left-animate');

    }, 500);

}


// MINUTES FUNCTIONALITY

var minutesRightCounter = minutes;
var minutesLeftCounter = tempMinutes;

function runMinutesClock(){

    if(secondsCounter == 0 && tempSecondsCounter == 0){

        if(minutesLeftCounter > 4){

            // 59 : 59 => 00 : 00 case
            if(minutesRightCounter == 9){
                minutesLeftCounter = 0;
                minLeftNext.innerHTML = minutesLeftCounter;
                minLeftCurrent.innerHTML = "";
                minLeftNext.classList.add('min-left-dialer-next-animate');
    
                minutesRightCounter = 0;
                minRightNext.innerHTML = minutesRightCounter;
                minRightCurrent.innerHTML = "";
                minRightNext.classList.add('min-right-dialer-next-animate');
            }
            else{
                minRightNext.innerHTML = ++minutesRightCounter;
                minRightCurrent.innerHTML = "";
                minRightNext.classList.add('min-right-dialer-next-animate');
            }

        }
        else{
            
            // [(09/19/29/39/49) : 59] case (09 : 59 -> 10 : 00)
            if(minutesRightCounter > 8){
                minLeftNext.innerHTML = ++minutesLeftCounter;
                minLeftCurrent.innerHTML = "";
                minLeftNext.classList.add('min-left-dialer-next-animate');
    
                minutesRightCounter = 0;
                minRightNext.innerHTML = minutesRightCounter;
                minRightCurrent.innerHTML = "";
                minRightNext.classList.add('min-right-dialer-next-animate');
            }
            // (05 : 59 --> 06 : 00) case
            else{
                minRightNext.innerHTML = ++minutesRightCounter;
                minRightCurrent.innerHTML = "";
                minRightNext.classList.add('min-right-dialer-next-animate');
            }

        }
    }


    setTimeout(function(){

        minRightCurrent.innerHTML = minutesRightCounter;
        minRightNext.classList.remove('min-right-dialer-next-animate');

        minLeftCurrent.innerHTML = minutesLeftCounter;
        minLeftNext.classList.remove('min-left-dialer-next-animate');

    }, 500);

}

// HOURS FUNCTIONALITY

var hoursRightCounter = hours;
var hoursLeftCounter = tempHours;

function runHoursClock(){

    if(minutesRightCounter == 0 && minutesLeftCounter == 0){

        

        // 23 : 59 : 59 => 00 : 00 : 00 case
        if(hoursRightCounter == 2 && hoursLeftCounter == 3){
            hoursLeftCounter = 0;
            hrsLeftNext.innerHTML = hoursLeftCounter;
            hrsLeftCurrent.innerHTML = "";
            hrsLeftNext.classList.add('hrs-left-dialer-next-animate');

            hoursRightCounter = 0;
            hrsRightNext.innerHTML = hoursRightCounter;
            hrsRightCurrent.innerHTML = "";
            hrsRightNext.classList.add('hrs-right-dialer-next-animate');

            amPMLeftCurrent.innerHTML = 'P'
            amPMLeftNext.classList.remove('amPM-left-dialer-next-animate');

            // if(amPMLeftCurrent == 'P'){
                amPMLeftNext.innerHTML = 'A';
                amPMLeftCurrent.innerHTML = "";
                amPMLeftNext.classList.add('amPM-left-dialer-next-animate');
                
            // }
            
        }
        // 19 : 59 : 59 => 20 : 00 : 00 case
        else if(hoursRightCounter > 8){
            hrsLeftNext.innerHTML = ++hoursLeftCounter;
            hrsLeftCurrent.innerHTML = "";
            hrsLeftNext.classList.add('hrs-left-dialer-next-animate');

            hoursRightCounter = 0;
            hrsRightNext.innerHTML = hoursRightCounter;
            hrsRightCurrent.innerHTML = "";
            hrsRightNext.classList.add('hrs-right-dialer-next-animate');
        }
        // 10 : 59 : 59 => 11 : 00: 00 case
        else{
            hrsRightNext.innerHTML = ++hoursRightCounter;
            hrsRightCurrent.innerHTML = "";
            hrsRightNext.classList.add('hrs-right-dialer-next-animate');

            amPMLeftCurrent.innerHTML = 'A'
            amPMLeftNext.classList.remove('amPM-left-dialer-next-animate');

            if(hoursLeftCounter == 1 && hoursRightCounter == 2){
                amPMLeftNext.innerHTML = 'P';
                amPMLeftCurrent.innerHTML = "";
                amPMLeftNext.classList.add('amPM-left-dialer-next-animate');

            }

        }

    }

    setTimeout(function(){

        hrsRightCurrent.innerHTML = hoursRightCounter;
        hrsRightNext.classList.remove('hrs-right-dialer-next-animate');

        hrsLeftCurrent.innerHTML = hoursLeftCounter;
        hrsLeftNext.classList.remove('hrs-left-dialer-next-animate');

    }, 500);

}