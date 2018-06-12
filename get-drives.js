
function drives(user_parse_id, gt_date, lt_date, callback){
  $(document).ready(function() {
    var base_url = 'https://miqapi-staging.herokuapp.com/1/drive?where={'
    var date_url = '"endedAt": {"$gte": {"__type": "Date", "iso": "'+ gt_date +'"}, "$lt": {"__type": "Date", "iso": "'+ lt_date + '"}},'
    var user_url = '"user": {"__type": "Pointer", "className": "whocares", "objectId": "' + user_parse_id +'"}}&limit=14&skip=0&roundtrip=0'
    get_drive_url = base_url + date_url + user_url;
    alert(get_drive_url)
    $.ajax({
      url: get_drive_url,
      crossDomain: true,
    dataType: 'json',
      headers: {
        'X-MileIQ-Application-Id':'E7EC264F-F470-4C7C-95AF-4B5D08C57346',
        'X-MileIQ-API-Key':'1BD272D1-3DC4-4AF4-BCC6-D125C521788C',
        'X-MileIQ-Acting-On':'6qXoOAW6EeefM876KXeJ8A',
        'Content-Type':'application/json'
    },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        alert('pass');
        callback(response['results']);
      },
      error: function() {
        alert('fail')
      }
    });
});
}