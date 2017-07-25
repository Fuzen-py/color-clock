function color_clock() {
	var d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds(), ms = d.getMilliseconds();

	if (h <= 9)  h  = "0" + h;
	if (m <= 9)  m  = "0" + m;
	if (s <= 9)  s  = "0" + s;
	if (ms <= 9) {ms = "00" + ms} else if (ms <= 99) {ms="0" +ms};


	var color = "#"+h+m+s;
	var current_time = h+":"+m+":"+s;
	document.body.style.background = color;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
	document.getElementById("ms").innerHTML = ms;
	document.getElementById('progress-bar').style.width = s/60*22 + '%';
	setTimeout(function() {
		color_clock();
	}, 1);

}

color_clock();
document.body.addEventListener('copy', function(e){
	e.clipboardData.setData('text/plain', document.body.style.background.value);
	e.preventDefault();
});
