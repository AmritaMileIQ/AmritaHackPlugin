
$(document).ready(function(){
      chrome.storage.local.get('signin', function(result){
        signin = result;
        if (result['signin'] == true) {
          $('.login').hide();
          $('.container').show();
        } 
        else {
          $('.container').hide();
          $('.login').show();
      }
      });
     	//display_test_buttons();
	});

$(document).ready(function(){

    //fetch drives
     	get_drives(get_user_parse_id(), "2018-01-01T00:00:00Z", "2018-07-01T23:59:59Z", function(response){
  			if ( response.length > 0 ){
          for(var i=0; i<response.length; i++){
            if ( i >= 5) {
              break;
            }
            createDriveInTab(response[i]);
          }
          classifyDriveOnClickEventHandler() 
        }
			});

      //fetch Expenses
      get_expenses(get_user_parse_id(), "2015-01-01", "2018-07-01", function(response){
  			console.log(response);
        if ( response.results.length > 0 ){
          for(var j=0; j<response.results.length; j++){
             if ( j >= 5) {
              break;
             }
            createExpenseInTab(response.results[j]);
          }
          classifyExpenseOnClickEventHandler()
        }
			});
	});

function createDriveInTab(drive) {
  var card = "<div class=\"card\">" +
         "<img src=\"icon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ drive.startLocCity +" -> "+ drive.endLocCity +"</b></h4>"+
            "<p>"+"Value $"+ drive.potentialValues.business.default+"</p>"+
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Business\" class=\"business-drive\"/>" +
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Personal\" class=\"personal-drive\"/>" +
         "</div>"
      "</div>";
  
  $('.container').append(card);
}

function classifyDriveOnClickEventHandler() {
  $(".business-drive").click(function() {
          classify_drives(get_user_parse_id(), $(this).attr('id'), CLASSIFY_DRIVE_BUSINESS, function(response){
            alert(response['code'])
        });
  });

  $(".personal-drive").click(function() {
          classify_drives(get_user_parse_id(), $(this).attr('id'), CLASSIFY_DRIVE_PERSONAL, function(response){
            alert(response['code'])
        });
  });
}


function createExpenseInTab(expense) {
  var card = "<div class=\"card\">" +
         "<img src=\"SpendIcon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ expense.merchant_name_and_location +"</b></h4>" +
            "<p>"+"Value $"+ expense.amount+"</p>" +
            "<input id=" + expense.id + " type=\"button\" value=\"Classify Business\" class=\"business-expense\"/>" +
            "<input id=" + expense.id + " type=\"button\" value=\"Classify Personal\" class=\"personal-expense\"/>" +
         "</div>"
      "</div>";
  $('.container').append(card);
}

function classifyExpenseOnClickEventHandler() {
  $(".business-expense").click(function() {
          var expense_id = $(this).attr('id');
          classify_expenses(get_user_parse_id(), CLASSIFY_EXPENSE_BUSINESS , expense_id, function(response){
            alert(response['classification'])
        });
  });

  $(".personal-expense").click(function() {
         var expense_id = $(this).attr('id');
         classify_expenses(get_user_parse_id(), CLASSIFY_EXPENSE_PERSONAL , expense_id, function(response){
            alert(response['classification'])
        });
  });
}