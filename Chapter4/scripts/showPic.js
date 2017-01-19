
function showPic(whichPic) {
	if(!document.getElementById("placeholder")) return false;
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementByTagName("a");
	for(var i = 0;i < links.length;i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

// function countBodyChildren() {
// 	var body_element = document.getElementByTagName("body")[0];
// 	alert(body_element.childNodes.length);
// }

addLoadEvent(prepareGallery);

