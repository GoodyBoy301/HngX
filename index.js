let time = document.querySelector('[data-testid="currentUTCTime"]');
let day = document.querySelector('[data-testid="currentDayOfTheWeek"]')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date().getUTCDay();
day.innerText = days[today];

setInterval(() => {
    const now = new Date().getTime();
    time.innerText = now.toString();
}, 1);
