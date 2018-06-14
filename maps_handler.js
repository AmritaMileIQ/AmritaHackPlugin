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
          var costString = ("$" + cost).fontcolor("green");
          
          var elem = document.createElement("img");
          elem.setAttribute("src", chrome.extension.getURL("icon_round.svg"));

          var costHTML = "<strong>  " +costString +"</br> </strong>";
          var potentialValueHTML = "<h2> POTENTIAL VALUE </h2>"
          $(parent[i]).append(elem);
          $(parent[i]).append(costHTML);
          $(parent[i]).append(potentialValueHTML);
      } 
   } 
}


