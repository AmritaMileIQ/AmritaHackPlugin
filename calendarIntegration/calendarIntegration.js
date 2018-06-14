$(document).ready(function(){
	$( "div[role='main']" ).removeAttr('jsaction');
	// $("#clickable a").click(function(e) {
 //   		//do something
 //   		e.stopPropagation();
	// })
	embedCardsInCalendar();

	$(".drive-personal-btn").click(function(e){
    alert("drive personal clicked!");
    e.stopPropagation();
    // var dateStr = $( this ).parent().find('.trans-date-cell').text();
    // var dateComps = dateStr.split('/');
    // var date = new Date(dateStr).toISOString();
    // var amountText = $( this ).parent().find('.trans-amount-cell').text();
    // var amount = amountText.substring(1,amountText.length);
    //   //console.log( $( this ).parent().find('.trans-desc-cell').text());
    //   var desc = $( this ).parent().find('.trans-desc-cell').text();
    //   var merchant = desc.substring(73,desc.length);
    //   //console.log(merchant);
    //   create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 1, merchant, date, merchant, function(response){
    //  			//alert(response['id'])
    //  		});
    //     $(this).fadeOut();
    //     $(this).next().fadeOut();
    //     $(this).parent().append("<td>Added Business Expense</td>").hide().fadeIn();
  });
});

function embedCardsInCalendar(){
	get_drives("6qXoOAW6EeefM876KXeJ8A", "2017-11-01T00:00:00Z", "2017-11-27T23:59:59Z", function(response){
  		//alert(response[0]['appVersion']);
  		for (var i = 0; i < response.length; i++){
  			var drive = response[i];
  			var driveCreationDate = new Date(drive.createdAt);
  			var dayOfDrive = driveCreationDate.getDate();
  			var dayElementOnCalendar = getTestDayElement(dayOfDrive);
  			var drivesHTML = "<div class=\"driveCard\" role=button>" +
						            "<p>"+ drive.startLocCity +" -> "+ drive.endLocCity +"<br>"+
						            "$"+ drive.potentialValues.business.default+
						            "<button class=\"drive-personal-btn\"type=\"button\">Personal</button>"+
						            "<button class=\"drive_business_btn\"type=\"button\">Business</button></p>" +
									//  "<img objectId=" + drive.objectId + "src=\"" + chrome.extension.getURL("calendarIntegration/32-x-32-personal-icon-donut-chart.svg") + "\"\
     				// 				 class=\"drive_personal_btn\">" +
									// "<img objectId=" + drive.objectId + "src=\"" + chrome.extension.getURL("calendarIntegration/24-x-24-business-icon-donut-chart.svg") + "\"\
								 //     class=\"drive_business_btn\">" +
							"</div>";
			$(dayElementOnCalendar).append(drivesHTML);
  		}
	});

	get_expenses("bs-LolSWEeiSwL65ypsPBA", "2018-06-01", "2018-07-01", function(response){
		//alert(response['count']);
		for (var i = 0; i < response.results.length; i++){
			var expense = response.results[i];
			var expenseCreationDate = new Date(expense.expense_date);
			var dayOfExpense = expenseCreationDate.getDate();
			var dayElementOnCalendar = getTestDayElement(dayOfExpense);
			var expenseHTML = "<div class=\"expenseCard\">" +
						            "<p>"+ expense.merchant_name +"<br>"+
						            "Value $"+ expense.amount+
						        //     "<img objectId=" + expense.id + "src=\"" + chrome.extension.getURL("32-x-32-personal-icon-donut-chart.svg") + "\"\
     								 // class=\"expense_personal_btn\">" +
									// "<img src=\"" + chrome.extension.getURL("24-x-24-business-icon-donut-chart.svg") + "\"\
								 //     class=\"expense_business_btn\">" +
								 "<button class=\"expense_personal_btn\"type=\"button\">Personal</button>"+
								 "<button class=\"expense_business_btn\"type=\"button\">Business</button></p>" +
						      "</div>";
		$(dayElementOnCalendar).append(expenseHTML);
  		}
		});
}

function myFun(){
	alert("press");
}



$(".drive_business_btn").click(function(e){
    alert("drive business clicked!");
       e.stopPropagation();
    // var dateStr = $( this ).parent().find('.trans-date-cell').text();
    // var dateComps = dateStr.split('/');
    // var date = new Date(dateStr).toISOString();
    // var amountText = $( this ).parent().find('.trans-amount-cell').text();
    // var amount = amountText.substring(1,amountText.length);
    //   //console.log( $( this ).parent().find('.trans-desc-cell').text());
    //   var desc = $( this ).parent().find('.trans-desc-cell').text();
    //   var merchant = desc.substring(73,desc.length);
    //   //console.log(merchant);
    //   create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 1, merchant, date, merchant, function(response){
    //  			//alert(response['id'])
    //  		});
    //     $(this).fadeOut();
    //     $(this).next().fadeOut();
    //     $(this).parent().append("<td>Added Business Expense</td>").hide().fadeIn();
  });

$(".expense_personal_btn").click(function(e){
    alert("expense business clicked!");
    e.stopPropagation();
    // var dateStr = $( this ).parent().find('.trans-date-cell').text();
    // var dateComps = dateStr.split('/');
    // var date = new Date(dateStr).toISOString();
    // var amountText = $( this ).parent().find('.trans-amount-cell').text();
    // var amount = amountText.substring(1,amountText.length);
    //   //console.log( $( this ).parent().find('.trans-desc-cell').text());
    //   var desc = $( this ).parent().find('.trans-desc-cell').text();
    //   var merchant = desc.substring(73,desc.length);
    //   //console.log(merchant);
    //   create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 1, merchant, date, merchant, function(response){
    //  			//alert(response['id'])
    //  		});
    //     $(this).fadeOut();
    //     $(this).next().fadeOut();
    //     $(this).parent().append("<td>Added Business Expense</td>").hide().fadeIn();
  });

$(".expense_business_btn").click(function(e){
    alert("Business Expense clicked!");
    e.stopPropagation();
    // var dateStr = $( this ).parent().find('.trans-date-cell').text();
    // var dateComps = dateStr.split('/');
    // var date = new Date(dateStr).toISOString();
    // var amountText = $( this ).parent().find('.trans-amount-cell').text();
    // var amount = amountText.substring(1,amountText.length);
    //   //console.log( $( this ).parent().find('.trans-desc-cell').text());
    //   var desc = $( this ).parent().find('.trans-desc-cell').text();
    //   var merchant = desc.substring(73,desc.length);
    //   //console.log(merchant);
    //   create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 1, merchant, date, merchant, function(response){
    //  			//alert(response['id'])
    //  		});
    //     $(this).fadeOut();
    //     $(this).next().fadeOut();
    //     $(this).parent().append("<td>Added Business Expense</td>").hide().fadeIn();
  });

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
