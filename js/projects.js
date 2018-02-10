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

// fix toggle so that bar slides out when you hover over "bar" div seperate from nav inside aside
 $('aside').hide().delay(900).fadeIn(2000);

//  $(document).hover(function() {
//   $( "aside" ).toggle( "slide" );
// });


});
