/*
Get users expenses paginated.
*/

function expenses(user_parse_id, callback) {
  $(document).ready(function() {
      $.ajax({
          url: 'https://spend-staging.mobiledatalabs.com/api/1/expenses/?&ignore_categories=true&page=1&page_size=1',
          crossDomain: true,
          dataType: 'json',
          headers: {
          'X-MileIQ-Application-Id':'E7EC264F-F470-4C7C-95AF-4B5D08C57346',
          'X-MileIQ-API-Key':'1BD272D1-3DC4-4AF4-BCC6-D125C521788C',
          'X-MileIQ-Acting-On': user_parse_id,
          'Content-Type':'application/json'
          },
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            alert('success')
            callback(response);
          },
          error: function() {
            alert('fail')
          }
      });
  });

}