
$(document).ready(function(){
     	$( "#get-drive-btn" ).click(function() {
 			drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  			alert(response.length);
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


		$( "#post-drive-btn" ).click(function() {
 			classify('8NeGPsnxEeeEqwpYCvQAIA', 'NuzQcMnyEee5DwpYCvQCGg', 2, function(response){
 				alert(response['code'])
 			});
		});
	});

$(document).ready(function(){

    //fetch drives
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

      //fetch Expenses
      expenses("bs-LolSWEeiSwL65ypsPBA", function(response){
  			console.log(response);
        if ( response.results.length > 0 ){
          for(var j=0;j<response.results.length;j++){
            // if ( i >= 5) {
            //   break;
            // }
            createExpenseInTab(response.results[j]);
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


function createExpenseInTab(expense) {
  var card = "<div class=\"card\">" +
         "<img src=\"SpendIcon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ expense.merchant_name_and_location +"</b></h4>"+
            "<p>"+"Value $"+ expense.amount+"</p>"+
         "</div>"
      "</div>";
  $('.container').append(card);
}