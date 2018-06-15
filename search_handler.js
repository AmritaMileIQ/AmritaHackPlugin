$(document).ready(function(){
 init();
});

function init() {
  updateElements()
}

function updateElements() {
	var parent = $("#gs_lc0");
	
	var searchText = parent.find("#lst-ib").val().toLowerCase().trim();
	if(searchText.indexOf("turbotax") != -1) {
		var results = $("#resultStats");
		//console.log(results.text())
		var divElement = document.createElement("div");
		divElement.setAttribute("style", "margin-top:-25px;color:green");

		 var imageElement = document.createElement("img");
          imageElement.setAttribute("src", chrome.extension.getURL("icon_round.svg"));
          // imageElement.setAttribute("hspace", "5px")
         imageElement.setAttribute("style", "margin-top:10px;")

         var pElement = document.createElement("p");
         pElement.setAttribute("style", "margin-top:-47px; margin-left:25px;");


          var textHTML = "Save $25 off Turbotax by referring a friend!"
          pElement.append(textHTML);
          divElement.append(imageElement);
          divElement.append(pElement);
          results.append(divElement);
	} 
}