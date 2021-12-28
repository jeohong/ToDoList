const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minuttes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const currentDate = String(`${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`);

    clock.innerHTML = (`${currentDate}<br>${hours}:${minuttes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);