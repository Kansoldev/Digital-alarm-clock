var timer = document.getElementById("timer");
var alarmhour = document.getElementById("alarmhour");
var alarmmins = document.getElementById("alarmmins");
var alarmsecs = document.getElementById("alarmsecs");
var ampm = document.getElementById("ampm");
var startstop = document.getElementById("startstop");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("clap.wav");
sound.loop = true;

function showTime() {
	var now = new Date();
	currentTime = now.toLocaleTimeString();

	if (currentTime === alarmElement) {
		sound.play();
	}

	timer.textContent = currentTime;
	setTimeout(showTime, 1000);
}

showTime();

function addSec(id) {
	var sec = 59;

	for (i = 0; i <= sec; i++) {
		id.appendChild(new Option(i < 10 ? "0" + i : i));
	}
}

function addMins(id) {
	const min = 59;

	for (i = 0; i <= min; i++) {

		id.appendChild(new Option(i));
	}
}

function addHour(id) {
	var hour = 12;

	for (i = 0; i <= hour; i++) {

		id.appendChild(new Option(i));
	}
}

addHour(alarmhour);
addSec(alarmsecs);
addMins(alarmmins);

start.onclick = function() {
	if (activeAlarm === false) {
		alarmhour.disabled = true;
		alarmmins.disabled = true;
		alarmsecs.disabled = true;
		ampm.disabled = true;

		alarmElement = alarmhour.value + ":" + alarmmins.value + ":" + alarmsecs.value + " " + ampm.value;

		this.textContent = "Clear Alarm";
		activeAlarm = true;
	} else {
		alarmhour.disabled = false;
		alarmmins.disabled = false;
		alarmsecs.disabled = false;
		ampm.disabled = false;

		this.textContent = "Set Alarm";
		sound.pause();
		activeAlarm = false;
	}
}
