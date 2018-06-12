$(document).ready(function(){
     	$( "#btn" ).click(function() {
 			drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			alert(response[0]['appVersion']); // this is where you get the return value
			});
		});
	});
	
//onclick='expenses("bs-LolSWEeiSwL65ypsPBA")'
       	 //drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z")