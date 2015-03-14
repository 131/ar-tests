$(window).on("AR_BEGIN AR_END", function(event){
  console.log("AR", event.type);
});

$(document).ready(function(){
  setTimeout(function(){
    $(window).trigger("AR_BEGIN");

    $("#drawing").addClass("animate");
    setTimeout(function(){
      $(window).trigger("AR_END");
    }, 4000);

  }, 1000);
});