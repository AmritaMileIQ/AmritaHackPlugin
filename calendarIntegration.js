$(document).ready(function(){
	// $( "div[role='main']" ).removeAttr('jsaction');
	// $("#clickable a").click(function(e) {
 //   		//do something
 //   		e.stopPropagation();
	// })

	$("div").removeAttr('jsaction');
	//$("div").removeAttr('jscontroller');
//$("*").unbind("click"); // Removes all click handlers added by javascript from every element
//$("[onclick]").removeAttr("onclick"); // Finds all elements with an 'onclick' attribute, and removes that attribute
	//$("div").prop('onclick',null).off('click');
	//disableEvents();
	//$('*').click(function(e){e.preventDefault();});

	embedCardsInCalendar();


 	// $("head").append("<base href=\"https://github.com/AmritaMileIQ/AmritaHackPlugin/blob/master/calendarIntegration/\">")
 	// var s = document.createElement("script");
  //   //s.type = "text/javascript";
  //   s.src = "https://github.com/AmritaMileIQ/AmritaHackPlugin/blob/master/calendarIntegration/calendarIntegration.js";
  //   // Use any selector
  //   $("head").append("<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\">");
  //   $("head").append(s);
  $("#drive-personal-btn").click(function(e){
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

$("#drive-business-btn").click(function(e){
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

$("#expense-personal-btn").click(function(e){
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

$("#expense-business-btn").click(function(e){
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
});

function disableEvents(){
	$('div').css('pointer-events','none');
}


function embedCardsInCalendar(){
	get_drives(get_user_parse_id(), "2018-06-01T00:00:00Z", "2018-06-27T23:59:59Z", function(response){
  		//alert(response[0]['appVersion']);
  		for (var i = 0; i < response.length; i++){
  			var drive = response[i];
  			var driveCreationDate = new Date(drive.createdAt);
  			var dayOfDrive = driveCreationDate.getDate();
        var timeOfDrive = driveCreationDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  			var dayElementOnCalendar = getTestDayElement(dayOfDrive);
  			var drivesHTML = "<div style=\"height:100%; width:100%;\">" +
                            "<div style=\"float:right;margin-top:-52px;height:30px\">" + 
                            "<p class=\"time\">"+ "<span>" + timeOfDrive + "</span>" +
            								"<img src=\"" + chrome.extension.getURL("mileiq-circle-icon.svg") + "\" class=\"px_MileIQ_AppIcon\"/></p></div>" + 
            								"<div class=\"driveCard\">" +
          						            "<p class=\"driveTitle\">"+ drive.startLocCity +" to "+ drive.endLocCity +"<br>"+
            						            "<div class=\"driveDetails\">" +
            						                "$"+ Math.round( drive.potentialValues.business.default * 10) / 10+ "  .  " + 
            						                 Math.round(drive.googleDistance * 10) / 10 + "mi" +
                                    "</div>" + 
                                  "</p>" +
          						            "<div style=\"width:95px;\">" + 
                                    "<div id=\"drive-personal-btn\" class=\"Rectangle-698\">" +
          						            	 "<img src=\"" + chrome.extension.getURL("personal-icon.svg") + "\"\
               										       class=\"Personal-Fill-Color-24\">" + 
                                      "</img>" + 
                                    "</div>" +
                                    "<div id=\"drive-business-btn\" class=\"Rectangle-690\">" +
                                      "<img src=\"" + chrome.extension.getURL("business-icon.svg") + "\"\
                                          class=\"Business-Fill-Color-24\">" +
                                      "</img>" +
                                    "</div>" + 
                                  "</div>" +
          								  "</div>" +
							            "</div>";
			$(dayElementOnCalendar).append(drivesHTML);
  		}

      get_expenses(get_user_parse_id(), "2018-06-05", "2018-07-01", function(response){
    //alert(response['count']);

    for (var i = 0; i < response.results.length; i++){
      var expense = response.results[i];
      var expenseCreationDate = new Date(expense.expense_date);
      var dayOfExpense = expenseCreationDate.getDate();
      var dayElementOnCalendar = getTestDayElement(dayOfExpense);
      var timeOfExpense = expenseCreationDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      var expenseHTML = "<div style=\"height:100%; width:100%;\">" +
                            "<div style=\"float:right;margin-top:-52px;height:30px\">" + 
                            "<p class=\"time\">"+ "<span>" + timeOfExpense + "</span>" +
                            "<img src=\"" + chrome.extension.getURL("spend-symbol-circle.svg") + "\" class=\"Spend_SymbolCircle\"/></p></div>" + 
                            "<div class=\"expenseCard\">" +
                                  "<p class=\"expenseTitle\">"+ "$"+ Math.round(expense.amount * 10) / 10 + "<br>"+
                                    "<div class=\"expenseDetails\">" +
                                         expense.merchant_name +
                                    "</div>" + 
                                  "</p>" +
                                  "<div style=\"width:95px;\">" + 
                                    "<div id=\"drive-personal-btn\" class=\"Rectangle-698\">" +
                                     "<img src=\"" + chrome.extension.getURL("personal-icon.svg") + "\"\
                                         class=\"Personal-Fill-Color-24\">" + 
                                      "</img>" + 
                                    "</div>" +
                                    "<div id=\"drive-business-btn\" class=\"Rectangle-690\">" +
                                      "<img src=\"" + chrome.extension.getURL("business-icon.svg") + "\"\
                                          class=\"Business-Fill-Color-24\">" +
                                      "</img>" +
                                    "</div>" + 
                                  "</div>" +
                            "</div>" +
                          "</div>";
      $(dayElementOnCalendar).append(expenseHTML);
      }
      // var elements = document.getElementsByClassName('expense_personal_btn');
      // console.log($(elements[0]));
      // $(elements[0]).onclick = function(e){
    //    alert("expense business clicked!");
    //    e.stopPropagation();
    //  }
    //  console.log($(elements[0]));
  });
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
