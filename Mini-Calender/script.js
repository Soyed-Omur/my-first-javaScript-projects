const monthNameEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dateEl = document.getElementById("date");

const yearEl = document.getElementById("year");

const timeEl = document.getElementById("time");

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
})

dayNameEl.innerText = date.toLocaleString("en",{
    weekday:"long"
})

dateEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

function updateTime() {
    const currentTime = new Date().toLocaleString("en", {
        hour12: true, // Use 12-hour format
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    timeEl.innerText = currentTime;
}

// Call the updateTime function immediately to display the initial time
updateTime();

// Use setInterval to call updateTime every second
setInterval(updateTime, 1000);
