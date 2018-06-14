
$(document).ready(function(){
      chrome.storage.local.get('signin', function(result){
        signin = result;
        if (result['signin'] == true) {
          $('.login').hide();
          $('.container').show();
        }
        else {
          $('.container').hide();
          $('.login').show();
      }
      });
     	//display_test_buttons();
	});

$(document).ready(function(){

    //fetch drives
     	get_drives(get_user_parse_id(), "2018-01-01T00:00:00Z", "2018-07-01T23:59:59Z", function(response){
  			if ( response.length > 0 ){
          //create parenet ul
          $('#drive-container').append("<ul class='cards drives'></ul>");

          for(var i=0; i<response.length; i++){
            if ( i >= 5) {
              break;
            }
            createDriveInTab(response[i]);
          }
          createFullyClassifiedInDriveStack();
            $('.cards').commentCards();
          classifyDriveOnClickEventHandler();
        }
			});

      //fetch Expenses
      get_expenses(get_user_parse_id(), "2015-01-01", "2018-07-01", function(response){
  			console.log(response);
        if ( response.results.length > 0 ){
          $('#spend-container').append("<ul class='cards spend'></ul>");
          for(var j=0; j<response.results.length; j++){
             if ( j >= 5) {
              break;
             }
            createExpenseInTab(response.results[j]);
          }
          createFullyClassifiedInSpendStack();
            $('.cards').commentCards();
          classifyExpenseOnClickEventHandler()
        }
			});
	});

/*function createDriveInTab(drive) {
  var card = "<div class=\"card\">" +
         "<img src=\"icon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ drive.startLocCity +" -> "+ drive.endLocCity +"</b></h4>"+
            "<p>"+"Value $"+ drive.potentialValues.business.default+"</p>"+
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Business\" class=\"business-drive\"/>" +
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Personal\" class=\"personal-drive\"/>" +
         "</div>"
      "</div>";

  $('.container').append(card);
}*/

function createDriveInTab(drive) {

var driveDate = getReadableDate(drive.createdAt);
  var drive = "<li class='card'>"+
     "<div class='mapHolder' style='width: 100%; display: table;''>"+
        "<div style='display: table-row'>"+
           "<div style='display: table-cell;'> <img class='map' src='https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/37.3963922449,-121.952017816/15?mapSize=200,70&amp;mapMetadata=0&amp;key=oiR8jsTUEh4BzHZiUDpv~laLD4TmY5-rzYHoKSCSEnA~Am-SmzyOLOhQZ2kKb7kShLk17IA7ryp9IhWxrEjo24_iAgVzz3ewxoIhArp5-0PY'> </div>"+
           "<div style='display: table-cell;'>  <img class='map' src='https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/37.3963922449,-121.952017816/15?mapSize=200,70&amp;mapMetadata=0&amp;key=oiR8jsTUEh4BzHZiUDpv~laLD4TmY5-rzYHoKSCSEnA~Am-SmzyOLOhQZ2kKb7kShLk17IA7ryp9IhWxrEjo24_iAgVzz3ewxoIhArp5-0PY'> </div>"+
        "</div>"+
     "</div>"+
     "<h2 class='cardTitle'>"+drive.startLocCity+" to "+ drive.endLocCity+"</h2>"+
     "<h2 class='cardSubTitle'>"+driveDate+ " Value: $"+ Math.round(drive.potentialValues.business.default)+"</h2>"+
     "<div class='btnHolder'>"+
     "<button  class='personalBtn personal-drive' id='"+ drive.objectId + "'><img class='btnIcon' src='icons/personal_icon.png'></button>"+
     "<button  class='businessBtn business-drive' id='"+ drive.objectId + "'><img class='btnIcon' src='icons/business_icon.png'></button>"+
  "</li>";
  /*var card = "<div class=\"card\">" +
         "<img src=\"icon.png\" style=\"width:100%\">" +
         "<div class=\"card-container\">"+
            "<h4><b>"+ drive.startLocCity +" -> "+ drive.endLocCity +"</b></h4>"+
            "<p>"+ getReadableDate(drive.createdAt)+ " Value: $"+ Math.round(drive.potentialValues.business.default)+"</p>"+
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Business\" class=\"business-drive\"/>" +
            "<input id=" + drive.objectId + " type=\"button\" value=\"Classify Personal\" class=\"personal-drive\"/>" +
         "</div>"
      "</div>";*/

  $('.drives').append(drive);
}

function createFullyClassifiedInDriveStack(){
  var classified =  "<li class='card'>" +
      "<img class='classifiedBadge' src='icons/classifiedBadge.png'>"+
      "<h2 class='classifiedText'>100% Classified</h2>"+
      "<h2 class='classifiedSubText'>Take another drive</h2>"+
   "</li>";
   $('.drives').append(classified);
}

function getReadableDate(isoDate){
  var readable = new Date(isoDate);
  var m = readable.getMonth(); // returns 6
var d = readable.getDay();  // returns 15
var y = readable.getFullYear();  // returns 2012
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var mlong = months[m];
var fulldate = mlong + " " + d + ", " + y;
return fulldate;
}

function classifyDriveOnClickEventHandler() {

  $(".business-drive").click(function() {
          classify_drives(get_user_parse_id(), $(this).attr('id'), CLASSIFY_DRIVE_BUSINESS, function(response){
            //alert(response['code'])
        });
      var $this = $(this),
      $cards = $('.drives').find('.card'),
      $current = $cards.filter('.card--current'),
      $next = $cards.filter('.card--next');

      $cards.removeClass('card--current card--out card--next');

      $nextToNext = $next.next();
      $current.addClass('card--out');
      $next.addClass('card--current');
      $nextToNext.addClass('card--next');

  });

  $(".personal-drive").click(function() {
          classify_drives(get_user_parse_id(), $(this).attr('id'), CLASSIFY_DRIVE_PERSONAL, function(response){
            //alert(response['code'])
        });

        var $this = $(this),
        $cards = $('.drives').find('.card'),
        $current = $cards.filter('.card--current'),
        $next = $cards.filter('.card--next');

        $cards.removeClass('card--current card--out card--next');

        $nextToNext = $next.next();
        $current.addClass('card--out');
        $next.addClass('card--current');
        $nextToNext.addClass('card--next');
  });
}


function createExpenseInTab(expense) {
var expenseDate = getReadableDate(expense.expense_date);
  var spend = "<li class='card'>"+
     "<div class='cardTop'></div>"+
     "<h2 class='cardTitle'> $"+expense.amount+"</h2>"+
     "<h2 class='cardSubTitle'>"+expenseDate+ " Merchant: "+ expense.merchant_name+"</h2>"+
     "<div class='btnHolder'>"+
     "<button  class='personalBtn business-expense' id='"+ expense.id + "'><img class='btnIcon' src='icons/personal_icon.png'></button>"+
     "<button  class='businessBtn personal-expense' id='"+ expense.id + "'><img class='btnIcon' src='icons/business_icon.png'></button>"+
  "</li>";
  // var card = "<div class=\"card\">" +
  //        "<img src=\"SpendIcon.png\" style=\"width:100%\">" +
  //        "<div class=\"card-container\">"+
  //           "<h4><b>"+ expense.merchant_name_and_location +"</b></h4>" +
  //           "<p>"+"Value $"+ expense.amount+"</p>" +
  //           "<input id=" + expense.id + " type=\"button\" value=\"Classify Business\" class=\"business-expense\"/>" +
  //           "<input id=" + expense.id + " type=\"button\" value=\"Classify Personal\" class=\"personal-expense\"/>" +
  //        "</div>"
  //     "</div>";
  $('.spend').append(spend);
}

function createFullyClassifiedInSpendStack(){
  var classified =  "<li class='card'>" +
      "<img class='classifiedBadge' src='icons/spendClassifiedBadge.png'>"+
      "<h2 class='classifiedText'>100% Classified</h2>"+
      "<h2 class='classifiedSubText'>You have classified all your expenses</h2>"+
   "</li>";
   $('.spend').append(classified);
}

function classifyExpenseOnClickEventHandler() {
  $(".business-expense").click(function() {
          var expense_id = $(this).attr('id');
          classify_expenses(get_user_parse_id(), CLASSIFY_EXPENSE_BUSINESS , expense_id, function(response){
            //alert(response['classification'])
        });

        var $this = $(this),
        $cards = $('.spend').find('.card'),
        $current = $cards.filter('.card--current'),
        $next = $cards.filter('.card--next');

        $cards.removeClass('card--current card--out card--next');

        $nextToNext = $next.next();
        $current.addClass('card--out');
        $next.addClass('card--current');
        $nextToNext.addClass('card--next');
  });

  $(".personal-expense").click(function() {
         var expense_id = $(this).attr('id');
         classify_expenses(get_user_parse_id(), CLASSIFY_EXPENSE_PERSONAL , expense_id, function(response){
            //alert(response['classification'])
        });

        var $this = $(this),
        $cards = $('.spend').find('.card'),
        $current = $cards.filter('.card--current'),
        $next = $cards.filter('.card--next');

        $cards.removeClass('card--current card--out card--next');

        $nextToNext = $next.next();
        $current.addClass('card--out');
        $next.addClass('card--current');
        $nextToNext.addClass('card--next');
  });
}
