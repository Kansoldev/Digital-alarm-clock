function snoozeAlarm() {
    stopAlarm();
    setTimeout(initAlarm, 300000);
    button.innerText = "Cancel Alarm";
    button.setAttribute('onclick', 'cancelAlarm(this);');
}