$(document).ready(function(){
     	$( "#get-drive-btn" ).click(function() {
 			drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			alert(response[0]['appVersion']); 
			});
		});


		$( "#get-expenses-btn" ).click(function() {
 			expenses("bs-LolSWEeiSwL65ypsPBA", function(response){
  			alert(response['count']); 
			});
		});


		$( "#post-expense-btn" ).click(function() {
 			create_expenses('bs-LolSWEeiSwL65ypsPBA', 20.21, 2, "amrita hack1", "2018-06-12T00:00:00", "this is hack note", function(response){
     			alert(response['id'])
     		});
		});
	});
	