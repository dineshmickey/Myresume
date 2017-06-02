$(document).ready(function(){
    $('#username').focus();
});
function login()
{
    var username   = document.getElementById("user_id").value;
    var password   = document.getElementById("password").value;

     var SERVER_URL = "http://localhost:3000/login/username";
     var url=SERVER_URL+ username + '/' + email+ '/' +message ;
var jqxhr = $.ajax(url)
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
}
