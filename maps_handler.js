$(document).ready(function(){
 init();
});

function init() {
  updateElements()
}

function updateElements() {
 var parent = $(".section-directions-trip-numbers")
 for( i = 0 ; i < parent.length;i++) { 
     if ($(parent[i]).text().indexOf("miles") != -1) {
          var text =  $(parent[i]).text();
          var findString = "Leave around";
          var index = text.indexOf(findString)
          if(index == -1) {
            findString = "min"
          }
          var numOfMiles = text.substring(text.indexOf(findString) + findString.length, text.indexOf("miles")).trim()
          var cost = (numOfMiles * 0.535 ).toFixed(2)
          var costString = "$" + cost;
          
          var imageElement = document.createElement("img");
          imageElement.setAttribute("src", chrome.extension.getURL("icon_round.svg"));
          imageElement.setAttribute("style", "margin-top:-3px;");

         var pElement = document.createElement("span");
         pElement.setAttribute("style", "vertical-align:top; margin-left:5px;color:green");
         pElement.append(costString);

         var potentialValueHTML = "<h2> POTENTIAL VALUE </h2>"
         
         $(parent[i]).append(imageElement);
         $(parent[i]).append(pElement)
         $(parent[i]).append(potentialValueHTML);
      } 
   } 
}


