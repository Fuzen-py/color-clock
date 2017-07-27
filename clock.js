var showhex = false;
function to_hex(char) {return ("0" + char.toString(16)).slice(-2);}
function get_hex() {

	var d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();

	h = to_hex(h);
	m = to_hex(m);
	s = to_hex(s);
	return "#"+h+m+s;
}

function color_clock() {
	var d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds(), ms = d.getMilliseconds();
	if (h <= 9)  h  = "0" + h;
	if (m <= 9)  m  = "0" + m;
	if (s <= 9)  s  = "0" + s;
	if (ms <= 9) {ms = "00" + ms} else if (ms <= 99) {ms="0" +ms};

	var color = get_hex();
	var current_time = ""
	if (showhex) {current_time = get_hex()} else {
		current_time = h+":"+m+":"+s;
	}
	document.body.style.background = color;
	document.getElementById("base-time").innerHTML = current_time;
	if (showhex) {
		document.getElementById("ms").innerHTML = "";
		document.getElementById("ms-sep").innerHTML = "";
	} else {
		document.getElementById("ms").innerHTML = ms;
		document.getElementById("ms-sep").innerHTML = ".";
	}
	document.getElementById('progress-bar').style.width = s/60*22 + '%';
	setTimeout(function() {
		color_clock();
	}, 1);

}
color_clock();
document.body.addEventListener('copy', function(e){
	e.clipboardData.setData('text/plain', get_hex());
	e.preventDefault();
});
document.body.addEventListener('click', function() {
	var resp = window.prompt("Copy to clipboard: Ctrl+C, Enter", get_hex());
	if (resp === "Hello") {
		var audio = new Audio('hello_friend.mp3');
		audio.play();
	}
});
document.getElementById('clock').addEventListener("mouseover", function() {
	showhex = true;
});

document.getElementById('clock').addEventListener("mouseout", function(){
	showhex = false;
});
