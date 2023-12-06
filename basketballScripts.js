let homeScoreEL = document.getElementById("homeScore")
let guestScoreEL = document.getElementById("guestScore")
let newPeriodEL = document.getElementById("period")


let guestFoulsEL = document.getElementById("guestFoulsCount")
let homeFoulsEL = document.getElementById("homeFoulsCount")

let newPeriodCount = 1

let homePoints = 0
let guestPoints = 0

let homeFouls = 0
let guestFouls = 0

//let homePlusOne = document.getElementById("homePlusOne")
//let homePlusTwo = document.getElementById("homePlusTwo")
//let homePlusThree = document.getElementById("homePlusThree")

//let guestPlusOne = document.getElementById("guestPlusOne")
//let guestPlusTwo = document.getElementById("guestPlusTwo")
//let guestPlusThree = document.getElementById("guestPlusThree")

function newPeriod() {
    newPeriodCount += 1
    newPeriodEL.textContent = newPeriodCount
    //console.log("hit1")
}

function scoreOne() {
    homePoints += 1
    homeScoreEL.textContent = homePoints
    //console.log("hit1")
}

function scoreTwo() {
    homePoints += 2
    homeScoreEL.textContent = homePoints
    //console.log("hit2")
}

function scoreThree() {
    homePoints += 3
    homeScoreEL.textContent = homePoints
    //console.log("hit3")
}


function scoreOneGuest() {
    guestPoints += 1
    guestScoreEL.textContent = guestPoints
    //console.log("hitGuest1")
}

function scoreTwoGuest() {
    guestPoints += 2
    guestScoreEL.textContent = guestPoints
    //console.log("hitGuest2")
}

function scoreThreeGuest() {
    guestPoints += 3
    guestScoreEL.textContent = guestPoints
    //console.log("hitGuest3")
}


function foulHome() {
    homeFouls += 1
    homeFoulsEL.textContent = homeFouls
    //console.log("hit foul Home")
}

function foulGuest() {
    guestFouls += 1
    guestFoulsEL.textContent = guestFouls
    //console.log("hit foul Guest")
}



//Timer
const startingMinutes =  45
let time = startingMinutes * 60

const countDownEl = document.getElementById("timer")

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.textContent = minutes + ":" + seconds;

    if (time > 0) {
        time--;
    } else {
        // Timer reached zero, clear the interval to stop the countdown
        clearInterval(intervalId);
    }
}

function gameReset () {
    homeScoreEL.textContent = 0
    guestScoreEL.textContent = 0
    homeFoulsEL.textContent = 0
    guestFoulsEL.textContent = 0
    newPeriodEL.textContent = 1
}