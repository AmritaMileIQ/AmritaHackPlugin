
$(document).ready(function(){
     	display_test_buttons();
	});

$(document).ready(function(){

    //fetch drives
     	get_drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
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
      get_expenses("bs-LolSWEeiSwL65ypsPBA", "2018-06-01", "2018-07-01", function(response){
  			console.log(response);
        if ( response.results.length > 0 ){
          for(var j=0;j<response.results.length;j++){
             if ( j >= 5) {
               break;
             }
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