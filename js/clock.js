const clockTitle = document.querySelector('.js-clock');
const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function handledChangeValue() {
    const nowDate = new Date();
    const hours = String(nowDate.getHours()).padStart(2, "0");
    const minutes = String(nowDate.getMinutes()).padStart(2, "0");
    const seconds = String(nowDate.getSeconds()).padStart(2, "0");
    const week = WEEKDAY[nowDate.getDay()];
    clockTitle.innerHTML = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()} ${week} ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(handledChangeValue, 1000);