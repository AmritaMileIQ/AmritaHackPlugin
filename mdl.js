
$(document).ready(function(){
     	$( "#btn" ).click(function() {
 			drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			alert(response[0]['appVersion']); // this is where you get the return value
			});
		});
	});

$(document).ready(function(){
     	drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			if ( response.length > 0 ){

          for(var i=0;i<response.length;i++){
            if ( i >= 5) {
              break;
            }
            createDriveInTab(response[i]);


          }
        }
			});
	});

function createDriveInTab(drive) {
  var card = "<div class=\"card\">" +
         "<img src=\"icon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ drive.startLocCity +" -> "+ drive.endLocCity +"</b></h4>"+
            "<p>"+"Value $"+ drive.potentialValues.business.default+"</p>"+
         "</div>"
      "</div>";
  $('.container').append(card);


}
//onclick='expenses("bs-LolSWEeiSwL65ypsPBA")'
       	 //drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z")
