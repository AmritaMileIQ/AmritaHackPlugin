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
	      	headers: {
	        'X-MileIQ-Application-Id':'E7EC264F-F470-4C7C-95AF-4B5D08C57346',
	        'X-MileIQ-API-Key':'1BD272D1-3DC4-4AF4-BCC6-D125C521788C',
	        'X-MileIQ-Acting-On': user_parse_id,
	        'Content-Type':'application/json'
	    	},
	      	type: 'POST',
	      	data: JSON.stringify(expense),
	      	success: function(response) {
	        	alert(JSON.stringify(response))
	        	callback(response);
	      	},
	      	error: function() {
	        	alert('fail')
	      	}
      	});
  });
}