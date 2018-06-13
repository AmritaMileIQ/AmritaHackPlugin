function display_test_buttons(){
	$(document).ready(function(){
     	$( "#get-drive-btn" ).click(function() {
 			get_drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			alert(response.length);
			});
		});


		$( "#get-expenses-btn" ).click(function() {
 			get_expenses("bs-LolSWEeiSwL65ypsPBA", "2018-06-01", "2018-07-01", function(response){
  			alert(response['count']);
			});
		});


		$( "#post-expense-btn" ).click(function() {
 			create_expenses('bs-LolSWEeiSwL65ypsPBA', 20.21, 2, "amrita hack1", "2018-06-12T00:00:00", "this is hack note", function(response){
     			alert(response['id'])
     		});
		});


		$( "#post-drive-btn" ).click(function() {
 			classify_drives('8NeGPsnxEeeEqwpYCvQAIA', 'NuzQcMnyEee5DwpYCvQCGg', 2, function(response){
 				alert(response['code'])
 			});
		});

		$( "#stats-btn" ).click(function() {
 			get_user_month_stats('8NeGPsnxEeeEqwpYCvQAIA', '2017-11-01', function(response){
 				alert(response.length)
 			});
		});
	});
}