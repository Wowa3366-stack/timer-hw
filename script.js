const time = document.querySelector(".time");

let seconds = 30;

const timer = setInterval(function() {
    seconds--;
    time.textContent = seconds;

    if (seconds == 15) {
        alert("Залишилось менше половини часу!");
        document.body.style.background = "red";
    }

    if (seconds == 0) {
        clearInterval(timer);
        alert("Час вийшов!");
    }
}, 1000);