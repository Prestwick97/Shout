$(document).ready(function() {
  $("#userInput").submit(function() {
    var userInput1 = $("input#input1").val();
    $(".input1").append(userInput1.toUpperCase());
    $("#response").show();
    event.preventDefault();
  });
});