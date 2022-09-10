const timer = document.querySelector(".timer");
let h = 2, m = 0, s = 0;

function TIMER() {
    if (s < 0) {
        m--, s = 59;
    }
    if (m < 0) {
        h--, m = 59;
    }
    if (h < 0) {
        document.querySelector(".submit-btn").click();
        return;
    }
    let time = "";
    time += `0${h}`;
    time += ':';
    if (m < 10)
        time += `0${m}`;
    else time += m;
    time += ':';
    if (s < 10)
        time += `0${s}`;
    else time += s;
    timer.innerText = `Timer: ${time}`;
    s--;
}

TIMER();
setInterval(TIMER, 1000);

const sticky = timer.offsetTop;
window.onscroll = function() {
    if (window.pageYOffset >= sticky)
        timer.classList.add("sticky");
    else timer.classList.remove("sticky");
}