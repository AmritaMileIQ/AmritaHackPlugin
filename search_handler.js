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

		var divElement = document.createElement("div");
		divElement.setAttribute("style", "margin-top:-25px;color:green");

		var imageElement = document.createElement("img");
        imageElement.setAttribute("src", chrome.extension.getURL("icon_round.svg"));
        imageElement.setAttribute("style", "margin-top:10px;")
         
        imageElement.onclick = function(event) {
        window.location.href = "https://staging.dashboard.mileiq.com/settings/referral";
  		  };

        var pElement = document.createElement("p");
        pElement.setAttribute("style", "margin-top:-47px; margin-left:25px;");
        var textHTML = "Save $25 off TurboTax by referring a friend!"
        pElement.append(textHTML);
        divElement.append(imageElement);
        divElement.append(pElement);
        results.append(divElement);
	} 
}