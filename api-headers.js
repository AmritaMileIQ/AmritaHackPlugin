function get_api_headers(user_parse_id) {
	return {
          'X-MileIQ-Application-Id':'E7EC264F-F470-4C7C-95AF-4B5D08C57346',
          'X-MileIQ-API-Key':'1BD272D1-3DC4-4AF4-BCC6-D125C521788C',
          'X-MileIQ-Acting-On': user_parse_id,
          'Content-Type':'application/json'
          }
}