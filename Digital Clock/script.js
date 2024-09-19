const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock (){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let period = "AM";

    if(hr > 12){
        hr -= 12;
        period = "PM";
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hour.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;
    ampm.innerText = period;
}

updateClock();
setInterval(updateClock, 1000);