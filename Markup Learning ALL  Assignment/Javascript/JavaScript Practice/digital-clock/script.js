function showTime() {
    let now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

showTime();
setInterval(showTime, 1000);
