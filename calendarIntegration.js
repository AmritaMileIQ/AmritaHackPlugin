$(document).ready(function(){
	$( "div[role='main']" ).removeAttr('jsaction');
	embedCardsInCalendar();
});

function embedCardsInCalendar(){
	get_drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-01T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  		//alert(response[0]['appVersion']);
  		for (var i = 0; i < response.length; i++){
  			var drive = response[i];
  			var driveCreationDate = new Date(drive.createdAt);
  			var dayOfDrive = driveCreationDate.getDate();
  			var dayElementOnCalendar = getTestDayElement(dayOfDrive);
  			var drivesHTML = "<div class=\"calendarCard\" role=button>" +
						            "<p><b>"+ drive.startLocCity +" -> "+ drive.endLocCity +"</b><br>"+
						            "$"+ drive.potentialValues.business.default+"</p>"+
					      	"</div>";
			$(dayElementOnCalendar).append(drivesHTML);
			$(dayElementOnCalendar).click(function(){ console.log(test)})
			$(dayElementOnCalendar).children().click(function(){ console.log(test)})
  		}
	});
}

function getTestDayElement(day){
	//this method grabs the title element of the 12th day of the current month
	var h2Tags = $('h2');
	for (var i = 0; i < h2Tags.length; i++){
		if (h2Tags[i].innerHTML == day){
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

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'shouldRerunCalendar') {
    	embedCardsInCalendar();
    }
});
