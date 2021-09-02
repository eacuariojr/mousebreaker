function tryStart(){
    var button = document.querySelector("#clicker button");

    button.setAttribute("onclick", "incrementScore()");
    startTimer();

    document.querySelector("#counter h1").innerHTML = "1";
}

function startTimer(){
    //Hardcoded 30 second timer and 60 frames per second
    const TIMER_DURATION = 30000;
    const DISPLAY_FPS = 60;

    let countdown = TIMER_DURATION;
    let updates = TIMER_DURATION / 1000 * 60;

    let i = updates;

    //TODO: make timing system more durable than wet tissue paper
    var timer = setInterval(
        function(){
            setBarFullness((i/updates) * 100);
            i--;
        }, 1000/DISPLAY_FPS
    );
    
    setTimeout(() => {
            clearInterval(timer);
            let button = document.querySelector("#clicker button");
            button.setAttribute("onclick", "tryStart()");
        }, TIMER_DURATION
    );
}

function incrementScore(){
    let scoreBoard = document.querySelector("#counter h1");
    let score = parseInt(scoreBoard.innerText);
    
    scoreBoard.innerHTML = score + 1;
}

function setBarFullness(percent){
    let bar = document.querySelector("#timer #active-bar");

    //no input validation because I'm a REBEL
    bar.style.width = percent + "%";
}