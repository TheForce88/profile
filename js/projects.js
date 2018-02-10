$(document).ready(function() {
  console.log("ready!");
  var $winwidth = $(window).width();
  $("img.hot_air_balloon2.jpg").attr({
    width: $winwidth
  });
  $(window).bind("resize", function(){
    var $winwidth = $(window).width();
    $("img.hot_air_balloon2.jpg").attr({
      width: $winwidth
    });
  });





});
