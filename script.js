const hours = document.getElementById('horas')
const minutes = document.getElementById('minutos')
const seconds = document.getElementById('segundos')

const timer = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
})

