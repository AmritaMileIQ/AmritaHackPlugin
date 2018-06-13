function get_user_month_stats(user_parse_id, month_date, callback) {
	$(document).ready(function() {
	      $.ajax({
	          url: 'https://miqapi-staging.mobiledatalabs.com/1/user-month-stats?monthDate=' + month_date,
	          crossDomain: true,
	          dataType: 'json',
	          headers: get_api_headers(user_parse_id),
	          type: 'GET',
	          data: {
	            format: 'json'
	          },
	          success: function(response) {
	            callback(response['results']);
	          },
	          error: function() {
	            alert('fail in get_user_month_stats')
	          }
	      });
	  });
}