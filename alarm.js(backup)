const ampm = document.getElementById("ampm");
const hour = document.getElementById("hr");
const mins = document.getElementById("min");
const check = document.getElementById("check");
const timerButton = document.getElementById("timerbtn");
const snoozeBtn = document.getElementById("snooze");
const timerSecs = document.getElementById("timer-secs");
const timerMins = document.getElementById("timer-mins");
const currentCount = parseInt(timerMins.textContent);
const sound = new Audio("alarm.mp3");
sound.loop = true;
let num = currentCount * 60;
let alarm;
let timer;
let alarmElement;
let status = true;

check.addEventListener("click", (e) => {
	if (e.target.checked) {
		playAlarm();
	}
})

snoozeBtn.addEventListener("click", () => {
	sound.pause();
    sound.currentTime = 0;
	clearTimeout(alarm);
    setTimeout(playAlarm, 5000);
});

timerButton.addEventListener("click", () => {
	if (status) {
		Timer();
		timerButton.textContent = "Stop Timer";
		status = false;
	} else {
		clearTimeout(timer);
		timerButton.textContent = "Start Timer";
		status = true;
	}
});

function addZero(num) {
	return num < 10 ? "0" + num : num;
}

function playAlarm() {
	const now = new Date();

	const hours = now.getHours() < 12 ? "AM" : "PM";
	const currentTime = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + " " + hours;
	alarmElement = hour.textContent + ":" + mins.textContent + " " + ampm.textContent;

	if (currentTime === alarmElement) {
		sound.play();

		if (check.checked === false) {
			sound.pause();
			sound.currentTime = 0;
		}
	}
	
	alarm = setTimeout(playAlarm, 1000);
}

function snoozeAlarm() {
	const now = new Date();
	
	const hours = now.getHours() < 12 ? "AM" : "PM";
	const currentTime = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + " " + hours;
	alarmElement = hour.textContent + ":" + mins.textContent + " " + ampm.textContent;

	if (currentTime === alarmElement && check.checked) {
		snoozeBtn.style.visibility = "visible";
	}

	if (check.checked === false) {
		snoozeBtn.style.visibility = "hidden";
	}
}

setInterval(snoozeAlarm, 1000);

function Timer() {
	let minutes = Math.floor(num / 60);
	let seconds = num % 60;
	timerMins.textContent = addZero(minutes);
	timerSecs.textContent = addZero(seconds);
	num++;
	timer = setTimeout(Timer, 1000);
}