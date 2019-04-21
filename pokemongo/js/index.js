countdownTimer();
function countdownTimer() {
	var now = moment();
	document.getElementById("displayMoment").innerHTML = moment.tz.guess() +" (GMT " + moment.tz(moment.tz.guess()).zoneAbbr() + ")<br>" + now.format("DD") + " de " + now.format("MMM") + " de " + now.format("YYYY") + "<br>" + now.format("HH:mm:ss");
	setTimeout(countdownTimer, 1000);
}