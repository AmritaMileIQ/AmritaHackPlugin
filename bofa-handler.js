$(document).ready(function(){
     	//alert("Success!");
      $('#transactions').find("tr").each(function( index ) {
  //console.log( index + ": " + $( this ).text() );
  if ( index!=0 && index < 18) {
    //temp hard coded logic
    var businessExpenseBtn = '<input class="add-expense-btn-bus" style="padding:5px ;" type="button"  value="Add Business Expense" />';
    $(this).append(businessExpenseBtn);

      $(this).append('<input class="add-expense-btn-per"  style="padding:5px ;" type="button"  value="Add Personal Expense" />')
      $(this).height("+=10");

  }

  });
  $(".add-expense-btn-bus").click(function(){
    //alert("Business Expense clicked!");
    var dateStr = $( this ).parent().find('.trans-date-cell').text();
    var dateComps = dateStr.split('/');
    var date = new Date(dateStr).toISOString();
    var amountText = $( this ).parent().find('.trans-amount-cell').text();
    var amount = amountText.substring(1,amountText.length);
      //console.log( $( this ).parent().find('.trans-desc-cell').text());
      var desc = $( this ).parent().find('.trans-desc-cell').text();
      var merchant = desc.substring(73,desc.length);
      //console.log(merchant);
      create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 1, merchant, date, merchant, function(response){
     			//alert(response['id'])
     		});
        $(this).fadeOut();
        $(this).next().fadeOut();
        $(this).parent().append("<td>Added Business Expense</td>").hide().fadeIn();
  });
  $(".add-expense-btn-per").click(function(){
    //alert("Personal Expense clicked!");
    var dateStr = $( this ).parent().find('.trans-date-cell').text();
    var dateComps = dateStr.split('/');
    var date = new Date(dateStr).toISOString();
    var amountText = $( this ).parent().find('.trans-amount-cell').text();
    var amount = amountText.substring(1,amountText.length);
      //console.log( $( this ).parent().find('.trans-desc-cell').text());
      var desc = $( this ).parent().find('.trans-desc-cell').text();
      var merchant = desc.substring(73,desc.length);
      //console.log(merchant);
      create_expenses('bs-LolSWEeiSwL65ypsPBA', amount, 2, merchant, date, merchant, function(response){
     		//	alert(response['id'])
     		});
        $(this).prev().fadeOut();
        $(this).fadeOut();
        $(this).parent().append("<td>Added Personal Expense</td>").hide().fadeIn();
  });
});
