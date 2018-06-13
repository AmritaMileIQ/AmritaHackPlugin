$(document).ready(function() {
    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'a'; // User validate
       var ValidPassword = $('#password').val() === 'a'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            chrome.storage.local.set({'signin': true});
            $('.login').hide();
            $('.container').show();
            $('.error').hide();
        }
        else {
            //$('.error').css('display', 'block'); // show error msg
            chrome.storage.local.set({'signin': false});
            $('.error').show();
            $('.login').show();
            $('.container').hide();
        }
    });

    $('#logout').click(function() {
        chrome.storage.local.set({'signin': false});
        $('.login').show();
        $('.container').hide();
        $('.error').hide();
    });
});