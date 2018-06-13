function drives(user_parse_id, gt_date, lt_date, callback){
  $(document).ready(function() {
    var base_url = 'https://miqapi-staging.mobiledatalabs.com/1/classes/Drive?where={'
    var date_url = '"endedAt": {"$gte": {"__type": "Date", "iso": "'+ gt_date +'"}, "$lt": {"__type": "Date", "iso": "'+ lt_date + '"}},'
    var user_url = '"user": {"__type": "Pointer", "className": "whocares", "objectId": "' + user_parse_id +'"}}&limit=14&skip=0&roundtrip=0'
    get_drive_url = base_url + date_url + user_url;
    $.ajax({
      url: get_drive_url,
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
        alert('fail in drives')
      }
    });
});
}

function get_drives_by_drive_id(user_parse_id, drive_parse_id, callback) {
  var drive_url = 'https://miqapi-staging.mobiledatalabs.com/1/drive/' + drive_parse_id
  $.ajax({
      url: drive_url,
      crossDomain: true,
      dataType: 'json',
      headers: get_api_headers(user_parse_id),
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        callback(response['results'][0]);
      },
      error: function() {
        alert('fail in get_drives_by_drive_id')
      }
  });
}
