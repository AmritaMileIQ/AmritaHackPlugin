/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
      
      var images = document.getElementsByTagName('img');
		for (var i = 0, l = images.length; i < l; i++) {
		  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
		}
    });
  }, false);
}, false);*/

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*function click(e) {
  //chrome.tabs.executeScript(null,
      //{code:"document.body.style.backgroundColor='" + e.target.id + "'"});
      chrome.tabs.executeScript(null,
      {code:domMagic()});

}*/

document.addEventListener('DOMContentLoaded', function() {
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
});

