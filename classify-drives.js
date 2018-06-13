function classify(user_parse_id, drive_parse_id, classify_state, callback) {
  $(document).ready(function() {
	get_drives_by_drive_id(user_parse_id, drive_parse_id, function(response){
		response['state'] = classify_state
		var drive_array = [];
		drive_array.push(response);
		update_drive_state(user_parse_id, drive_array, function(update_response){
			callback(update_response)
		});
	});
  });
}

function update_drive_state(user_parse_id, drives, callback) {
	$.ajax({
      		crossDomain: true,
      		dataType: 'json',
	        url: 'https://miqapi-staging.mobiledatalabs.com/1/classes/Drive',
	      	headers: get_api_headers(user_parse_id),
	      	type: 'PUT',
	      	data: JSON.stringify(drives),
	      	success: function(response) {
	            callback(response);
	      	},
	      	error: function() {
	        	alert('fail in update_drive_state')
	      	}
  	});
}
