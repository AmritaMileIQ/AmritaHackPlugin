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
          var numOfMiles = text.substring(text.indexOf(findString) + findString.length, text.indexOf("miles")).trim()
          var cost = (numOfMiles * 0.535 ).toFixed(2)
          var costHTML = "<h2>$" + cost +"</h2>";
          $(parent[i]).append(costHTML);
      } 
   } 
}


