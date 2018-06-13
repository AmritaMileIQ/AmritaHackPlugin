/*
Get users expenses paginated.
*/

function expenses(user_parse_id, callback) {
  $(document).ready(function() {
      $.ajax({
          url: 'https://spend-staging.mobiledatalabs.com/api/1/expenses/?&ignore_categories=true&page=1&page_size=1',
          crossDomain: true,
          dataType: 'json',
          headers: get_api_headers(user_parse_id),
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            callback(response);
          },
          error: function() {
            alert('fail in expenses')
          }
      });
  });

}
