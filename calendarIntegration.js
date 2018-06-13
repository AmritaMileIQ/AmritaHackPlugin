$(document).ready(function(){
	var element = getTestDayElement()
	drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-25T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  		alert(response[0]['appVersion']);
  		for (var i = 0; i < response.length; i++){
  			if (response[i]['createdAt'] > "2017-11-25T00:00:00Z" && response[i]['createdAt'] < "2017-11-25T23:59:59Z"){
  			var drivesHTML = "<h2>Drives</h2>";
			$(element).append(drivesHTML);
  		}
  		}
  		
	});
});

function getTestDayElement(){
	//this method grabs the title element of the 12th day of the current month
	var h2Tags = $('h2');
	for (var i = 0; i < h2Tags.length; i++){
		if (h2Tags[i].innerHTML == "25"){
			return h2Tags[i].parentElement;
		}
	}
}

function appendTestData(){
	//only for testing purposes
	//for this to work the user needs to be viewing month view for google calendar
	var element = getTestDay()
	element.append("<h2>Hey</h2>")
}



function getCurrentViewedDates(){
	// Todo this method should get current view dates so we can see if we have any drives or expenses
	// in that date range
}

