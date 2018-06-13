function create_expenses(user_parse_id, amount, classify, name, date, notes, callback){
	$(document).ready(function() {
	  var expense = {
  		"amount": amount,
  		"classification": classify,
  		"merchant_name": name,
  		"expense_date": date,
  		"notes": notes
	    }
      $.ajax({
      		crossDomain: true,
      		dataType: 'json',
	        url: 'https://spend-staging.mobiledatalabs.com/api/1/expenses/',
	      	headers: get_api_headers(user_parse_id),
	      	type: 'POST',
	      	data: JSON.stringify(expense),
	      	success: function(response) {
	        	callback(response);
	      	},
	      	error: function() {
	        	alert('fail in create_expenses')
	      	}
      	});
  });
}