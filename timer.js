function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
          clearInterval(timer);
          document.getElementById("timer").innerHTML = "Time's Up! <br/>"+"Total Point : 1";
        }
    }, 1000);
}

window.onload = function () {
    var tensec = 8,
        display = document.querySelector('#timer');
    startTimer(tensec, display);
};
