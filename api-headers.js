function get_api_headers(user_parse_id) {
	return {
          'X-MileIQ-Application-Id':'E7EC264F-F470-4C7C-95AF-4B5D08C57346',
          'X-MileIQ-API-Key':'1BD272D1-3DC4-4AF4-BCC6-D125C521788C',
          'X-MileIQ-Acting-On': '7vsH9G2eEeiszwpYCvQBsQ',
          'Content-Type':'application/json'
          }
}

function get_user_parse_id(){
	return '7vsH9G2eEeiszwpYCvQBsQ'
}

var CLASSIFY_EXPENSE_UNCLASSIFIED = 0
var CLASSIFY_EXPENSE_PERSONAL = 1
var CLASSIFY_EXPENSE_BUSINESS = 2

var CLASSIFY_DRIVE_UNCLASSIFIED = 0
var CLASSIFY_DRIVE_PERSONAL = 1
var CLASSIFY_DRIVE_BUSINESS = 2



