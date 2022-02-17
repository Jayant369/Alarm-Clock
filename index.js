var currentHoursRight = document.querySelector('.currentHourRight');
var nextHourRight = document.querySelector('.nextHourRight');

var currentHoursLeft = document.querySelector('.currentHourLeft');

var interval;


// function clock(){

//     interval = setInterval(runClock, 1000);

// }


function clock(){

    var rtClock = new Date();
    var rtClock1 = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    // current hour left
    var tempSeconds = seconds;
    tempSeconds = ("0" + tempSeconds).slice(-2, -1);
    currentHoursLeft.innerHTML = tempSeconds;

    var hours1 = rtClock1.getHours();
    var minutes1 = rtClock1.getMinutes();
    var seconds1 = rtClock1.getSeconds();

    // Add AM and PM system
    var amPm = (hours < 12) ? "AM" : "PM";

    hours = ("0" + hours).slice(-1);
    minutes = ("0" + minutes).slice(-1);
    seconds = ("0" + seconds).slice(-1);

    // // current hour right
    currentHoursRight.innerHTML = seconds;
    

    hours1 = ("0" + hours1).slice(-2);
    minutes1 = ("0" + minutes1).slice(-2);
    seconds1 = ("0" + seconds1).slice(-2);

    // 12 hr format
    // hours = (hours > 12 ? hours - 12 : hours);

    // 24 hr format
    // hours = (hours > 23 ? hours - 24 : hours);

    // Clock Display
    let clockDisplay = document.getElementById('date-container');
    clockDisplay.innerHTML = hours1 + " : " + minutes1 + " : " + seconds1 + " " + amPm;


    // Code below your ideas
    
    

    // nextHourRight.innerHTML = seconds;

    // nextHourRight.classList.add('nextHourRightAnimate');

    // setTimeout(function(){
    //     currentHoursRight.innerHTML = seconds;
    //     nextHourRight.classList.remove('nextHourRightAnimate');
    // }, 500);

    var t = setTimeout(clock, 500);

}

