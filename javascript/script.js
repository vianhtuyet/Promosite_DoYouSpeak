$(document).ready(function(){
  // СВАЙП КАРТИНОК
  $(".circle1").click(function(){
    $(".circle1").css("background-color","black");
    $(".circle2, .circle3").css("background-color","#C4C4C4");
    $(".swipepictures").css("transform","translateX(0)");
    $(".swipepictures").css("transition",".8s");
  });
  $(".circle2").click(function(){
    $(".circle2").css("background-color","black");
    $(".circle1, .circle3").css("background-color","#C4C4C4");
    $(".swipepictures").css("transform","translateX(-100%)");
    $(".swipepictures").css("transition",".8s");
  });
  $(".circle3").click(function(){
    $(".circle3").css("background-color","black");
    $(".circle1, .circle2").css("background-color","#C4C4C4");
    $(".swipepictures").css("transform","translateX(-200%)");
    $(".swipepictures").css("transition",".8s");
  });

  // ВЫБОР ЦВЕТА
  $(".colour1").click(function(){
    $(".colour1").css("border-radius","15px");
    $(".colour2, .colour3").css("border-radius","10px");
    $(".swipepictures").css("transform","translateX(0)");
    $(".circle1").css("background-color","black");
    $(".circle2, .circle3").css("background-color","#C4C4C4");
    $(".swipepictures").css("transition",".8s");
  });
  $(".colour2").click(function(){
    $(".colour2").css("border-radius","15px");
    $(".colour1, .colour3").css("border-radius","10px");$(".circle2").css("background-color","black");
    $(".swipepictures").css("transform","translateX(-100%)");
    $(".circle2").css("background-color","black");
    $(".circle1, .circle3").css("background-color","#C4C4C4");
    $(".swipepictures").css("transition",".8s");
  });
  $(".colour3").click(function(){
    $(".colour3").css("border-radius","15px");
    $(".colour1, .colour2").css("border-radius","10px");
    $(".swipepictures").css("transform","translateX(-200%)");
    $(".circle3").css("background-color","black");
    $(".circle1, .circle2").css("background-color","#C4C4C4");
    $(".swipepictures").css("transition",".8s");
  });

  // ДОБАВЛЕНИЕ В КОРЗИНУ
  $(".buttoncart, .cart").click(function(){
    setTimeout(function() {
      $(".cartnotification").addClass("fade");
      $(".cartnotification").removeClass("hidden");
      setTimeout(function() {
        $(".cartnotification").css("top", "-100px");
        $(".cartnotification").css("transition",".8s");
      }, 1700);
    }, 500);
    $(".cartnotification").addClass("hidden");
    $(".cartnotification").css("top", "17px");
  });

  // ЗАКРЫТИЕ КАРТОЧКИ
  $(".closebutton").click(function(){
    // $(".itemsweetcard").addClass("fadeout");
    $(".itemsweetcard, .itemsweetcardoverlay, .itemmerchcard, .itemmerchcardoverlay").addClass("hidden");
    $( "body" ).css("overflow", "visible");
    // $(".itemsweetcard").css("display", "none");
    $(".itemsweetcard, .itemmerchcard").css("transition",".8s");
    $(".swipepictures").css("transform","translateX(0)");
    $(".circle1").css("background-color","black");
    $(".circle2, .circle3").css("background-color","#C4C4C4");
    $(".colour1").css("border-radius","15px");
    $(".colour2, .colour3").css("border-radius","10px");
  });

  // ОТКРЫТИЕ КАРТОЧЕК
  $("#imitsw1, #itnm1").click(function(){
    $("#card1, #overlay1").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitsw2, #itnm2").click(function(){
    $("#card2, #overlay2").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitsw3, #itnm3").click(function(){
    $("#card3, #overlay3").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitsw4, #itnm4").click(function(){
    $("#card4, #overlay4").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitmrch1, #itnm5").click(function(){
    $("#card5, #overlay5").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitmrch2, #itnm6").click(function(){
    $("#card6, #overlay6").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitmrch3, #itnm7").click(function(){
    $("#card7, #overlay7").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });
  $("#imitmrch4, #itnm8").click(function(){
    $("#card8, #overlay8").removeClass("hidden");
    $( "body" ).css("overflow", "hidden");
    // $(".itemsweetcard").addClass("fade");
    // $(".itemsweetcard").css("display", "none");
    // $(".itemsweetcard").css("transition",".8s");
  });

  // ПЕРЕЛИСТЫВАНИЕ СТРАНИЦ В КНИГЕ
  $(".bookmark1").click(function(){
    $("#page1").removeClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
    $("#page5").addClass("hidden");
    $(".bookmark1").css("width", "70px");
    $(".bookmark2").css("width", "35px");
    $(".bookmark3").css("width", "35px");
    $(".bookmark4").css("width", "35px");
    $(".bookmark5").css("width", "35px");
  });
  $(".bookmark2").click(function(){
    $("#page1").addClass("hidden");
    $("#page2").removeClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
    $("#page5").addClass("hidden");
    $(".bookmark1").css("width", "35px");
    $(".bookmark2").css("width", "70px");
    $(".bookmark3").css("width", "35px");
    $(".bookmark4").css("width", "35px");
    $(".bookmark5").css("width", "35px");
  });
  $(".bookmark3").click(function(){
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").removeClass("hidden");
    $("#page4").addClass("hidden");
    $("#page5").addClass("hidden");
    $(".bookmark1").css("width", "35px");
    $(".bookmark2").css("width", "35px");
    $(".bookmark3").css("width", "70px");
    $(".bookmark4").css("width", "35px");
    $(".bookmark5").css("width", "35px");
  });
  $(".bookmark4").click(function(){
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").removeClass("hidden");
    $("#page5").addClass("hidden");
    $(".bookmark1").css("width", "35px");
    $(".bookmark2").css("width", "35px");
    $(".bookmark3").css("width", "35px");
    $(".bookmark4").css("width", "70px");
    $(".bookmark5").css("width", "35px");
  });
  $(".bookmark5").click(function(){
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
    $("#page5").removeClass("hidden");
    $(".bookmark1").css("width", "35px");
    $(".bookmark2").css("width", "35px");
    $(".bookmark3").css("width", "35px");
    $(".bookmark4").css("width", "35px");
    $(".bookmark5").css("width", "70px");
  });

  // ОТКРЫТИЕ ОПИСАНИЯ СОБЫТИЯ
  $("#event1").click(function(){
    if($("#descriptionevent1").hasClass("hidden")) {
      $("#descriptionevent1").removeClass("hidden");
  	 }
     else {
       $("#descriptionevent1").addClass("hidden");
     }
  });
  $("#event2").click(function(){
    if($("#descriptionevent2").hasClass("hidden")) {
      $("#descriptionevent2").removeClass("hidden");
  	 }
     else {
       $("#descriptionevent2").addClass("hidden");
     }
  });
  $("#event3").click(function(){
    if($("#descriptionevent3").hasClass("hidden")) {
      $("#descriptionevent3").removeClass("hidden");
  	 }
     else {
       $("#descriptionevent3").addClass("hidden");
     }
  });
  $("#event4").click(function(){
    if($("#descriptionevent4").hasClass("hidden")) {
      $("#descriptionevent4").removeClass("hidden");
  	 }
     else {
       $("#descriptionevent4").addClass("hidden");
     }
  });
  $("#event5").click(function(){
    if($("#descriptionevent5").hasClass("hidden")) {
      $("#descriptionevent5").removeClass("hidden");
  	 }
     else {
       $("#descriptionevent5").addClass("hidden");
     }
  });
});
