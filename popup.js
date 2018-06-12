/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
     domMagic();
    });
  }, false);
}, false);

function domMagic() {
var span = document.getElementById("lines");
var nodes = document.getElementById("lines").childNodes;
for ( i=0; i<nodes.length;i++){
	var node = nodes[i];
	if (node.data) {
		//console.log(node.innerHTML);
		//remove nodes
		
		var div = document.createElement("div");
		div.style.background = "red";
		div.style.color = "white";
		div.innerHTML = node.data;
		//console.log(div)
		//span.appendChild(div);
		span.replaceChild(div,node);

	}
}

}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});*/

