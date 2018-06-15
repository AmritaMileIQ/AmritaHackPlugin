/*
Get users expenses paginated.
https://spend-staging.mobiledatalabs.com/api/1/expenses/?&ignore_categories=true&page=1&page_size=20&expense_date__gte=2018-06-01&expense_date__lte=2018-06-9
*/

function get_expenses(user_parse_id, from_date, to_date, callback) {
  from_date = '2018-05-01';
  to_date ='2018-07-01'
  var base_url = 'https://spend-staging.mobiledatalabs.com/api/1/expenses/?&ignore_categories=true&page=1&page_size=40&expense_date__gte='
  var date_url = base_url + from_date +'&expense_date__lte=' + to_date + '&classification__in=0'  //  only unclassified expenses
  //var date_url = base_url + from_date +'&expense_date__lte=' + to_date   // all expenses
  $(document).ready(function() {
      $.ajax({
          url: date_url ,
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
            //alert('fail in expenses')
          }
      });
  });

}
