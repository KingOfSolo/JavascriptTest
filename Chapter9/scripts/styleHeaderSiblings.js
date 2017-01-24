
function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	alert(headers.length);
	var elem;
	for(var i=1; i<headers.length; i++){
		elem = getNextElement(headers[i].nextSibling);
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.5em";
	}
}

function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	} 
	if (node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

window.onload = styleHeaderSiblings;