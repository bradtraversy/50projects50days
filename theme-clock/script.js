const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const alarmTimeEl = document.querySelector('#alarm-time');
const setAlarmButton = document.querySelector('.set-alarm');
const alarmStatusEl = document.querySelector('.alarm-status');
const alarmNotification = document.querySelector('#alarm-notification');
const weatherLocationEl = document.querySelector('.weather-location');
const weatherDescriptionEl = document.querySelector('.weather-description');
const weatherTempEl = document.querySelector('.weather-temp');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let alarmTime = null;

// Load the alarm sound
const alarmSound = new Audio('./mixkit-digital-clock-digital-alarm-buzzer-992.wav');

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});

setAlarmButton.addEventListener('click', () => {
    alarmTime = alarmTimeEl.value;
    if (alarmTime) {
        alarmStatusEl.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alarmStatusEl.textContent = 'Please set a valid time for the alarm';
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12 || 12; // Adjust for 12-hour format
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

function checkAlarm() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const currentTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

    if (alarmTime && currentTime === alarmTime) {
        alarmSound.play(); // Play alarm sound
        showAlarmNotification(); // Show the notification
        alarmTime = null; // Reset alarm after triggering
        alarmStatusEl.textContent = 'No alarm set';
    }
}

// Show the alarm notification on the webpage
function showAlarmNotification() {
    alarmNotification.classList.add('show'); // Show the notification
    setTimeout(() => {
        alarmNotification.classList.remove('show'); // Hide the notification after 5 seconds
    }, 5000); // Notification disappears after 5 seconds
}


// Scale function for time rotation
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Set the clock and weather widget
setTime();
setInterval(() => {
    setTime();
    checkAlarm(); // Check if the alarm time is reached
}, 1000);

// Initialize weather widget
getLocation();
