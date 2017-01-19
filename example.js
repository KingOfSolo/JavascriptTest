var mood = "happy",age = 33,height = "about 5'10\" tall";
var lennon = {name:"John",year:1940,living:false};
var beatles = {};
beatles.vocalist=lennon;

window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello world");
	para.appendChild(txt);
}

