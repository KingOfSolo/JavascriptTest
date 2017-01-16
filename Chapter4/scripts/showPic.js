
function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

function countBodyChildren() {
	var body_element = document.getElementByTagName("body")[0];
	alert(body_element.childNodes.length);
}

window.onload = countBodyChildren();