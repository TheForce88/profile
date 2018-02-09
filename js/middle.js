$(document).ready(function() {
  console.log( "ready!" );
  //header js
  $('.header-button').hide().delay(2500).fadeIn(2200);

  $('.second-page').hide(); //your second page is currently hidden

  $('.header-button').on('click', function() {
    console.log("you clicked to enter page!");
    $('header').hide();
    $('html').css('background-image',"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('./img/background_7.jpg')");
    $('.second-page').fadeIn();
  });

  //second-page js
  $(".sub-lang").hide();
  $(".sub-frame").hide();
  $(".sub-tools").hide();
  $(".sub-sport").hide();

  // $("#languages").onmouseover = function() {
  //   mouseOver();
  // });

  // function mouseOver() {
  //   $("sub-lang").fadeIn(900);
  // };

  $("#languages").hover(function() {
    $(".sub-lang").fadeToggle(900,"linear");
  });

  $("#frameworks").hover(function() {
    $(".sub-frame").fadeToggle(900,"linear");
  });

  $("#tools").hover(function() {
    $(".sub-tools").fadeToggle(900,"linear");
  });

  $("#sports").hover(function() {
    $(".sub-sport").fadeToggle(900,"linear");
  });
});
