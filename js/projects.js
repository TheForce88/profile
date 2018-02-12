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
 $('.sectionhome').hide();
 $('article').hide();

 $('aside').hide().delay(900).fadeIn(2000);

//  $(document).hover(function() {
//   $( "aside" ).toggle( "slide" );
// });

  $("aside nav a").each(function() {
    $(this).on("click", function() {
    //console.log("working!");
    var sectionId = $(this).attr("href");
    console.log(sectionId);
    $("section, article").hide();
    $(sectionId).show();
    $(".sectionhome").fadeIn();
    })
  });

  $(".sectionhome a").each(function() {
    $(this).on("click", function() {
    var test = $("a");
    console.log(test);
    var subSecId = $(".sectionhome").children().attr("href");
    console.log(subSecId);
    // $("section, article").hide();
    $(subSecId).show();
    })
  });

    // $('article').show();
});
