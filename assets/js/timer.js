function startTimer(){
    //Hardcoded 30 second timer and 60 frames per second
    const TIMER_DURATION = 30000;
    const DISPLAY_FPS = 60;

    var countdown = TIMER_DURATION;
    var updates = TIMER_DURATION / 1000 * 60;

    let i = updates;

    //TODO: make timing system more durable than wet tissue paper
    var timer = setInterval(
        function(){
            setBarFullness((i/updates) * 100);
            i--;
        }, 1000/DISPLAY_FPS
    )
    
    setTimeout(() => {clearInterval(timer);}, TIMER_DURATION);

}

function setBarFullness(percent){
    var bar = document.querySelector("#timer #active-bar");

    //no input validation because I'm a REBEL
    bar.style.width = percent + "%";
}