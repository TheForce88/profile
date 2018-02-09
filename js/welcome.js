// function setLiMargin(){
//      var parentH = $(".spaced").height();
//      var evenCount = $(".spaced .even").length;
//      console.log(evenCount);
//      var evenHeight = 250;
//      var margin = parseInt((parentH/evenCount - evenHeight)/2);
//      $('.spaced .even').css('margin',margin+'px 25px');
//
//  }

$( document ).ready(function() {
    console.log( "ready!" );

    // setLiMargin();

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
