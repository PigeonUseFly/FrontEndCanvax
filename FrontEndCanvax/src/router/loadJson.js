function loadJson(callback) {
	var XmlHttpRequest = new XMLHttpRequest();
	XmlHttpRequest.overrideMimeType("application/json");
	XmlHttpRequest.open('GET', 'file.json', true);
	XmlHttpRequest.onreadystatechange = function () {
		if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200") {
			// .open will NOT return a value 
			// but simply returns undefined in async mode so use a callback
			callback(XmlHttpRequest.responseText);
		}
	}
	XmlHttpRequest.send(null);
}
 
loadJson(function(response) {
	jsonResponse = JSON.parse(response);
	console.log(jsonResponse);
});