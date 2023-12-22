(function ($) {
  $( document ).ready(function() {

    init();

    $("#v1").click(function(event){
        if ($("#v1").hasClass("active")) {
            $(".box").hide();
            $("#s1").removeClass("v2"); 
            $("#s1").removeClass("v3"); 
            $("#s2").fadeTo(0, 0);
            $("#s3").fadeTo(0, 0);
            $("#v1").removeClass("active");
            $("#v2").removeClass("active");
            $("#v3").removeClass("active");
        } else {
            $("#s1").removeClass("v2 v3");
            $("#s2").fadeTo(0, 0);
            $("#s3").fadeTo(0, 0);
            $(".box").removeClass("show-th");
            $(".box").show();
            $("#v1").addClass("active");
            $("#v2").removeClass("active");
            $("#v3").removeClass("active");
        }
        event.preventDefault();
    });
    
    $("#v2").click(function(event){
        if ($("#v2").hasClass("active")) {
            $(".box").hide();
            $("#s2").fadeTo(0, 0);
            $("#s3").fadeTo(0, 0);
            $("#s1").removeClass("v2"); 
            $("#v1").removeClass("active");
            $("#v2").removeClass("active");
            $("#v3").removeClass("active");
        } else {
            $(".box").addClass("show-th");
            $(".box").show();
            $("#s2").fadeTo(0, 1);
            $("#s3").fadeTo(0, 0);
            $("#s1").addClass("v2").removeClass("v3");
            $("#v2").addClass("active");
            $("#v1").removeClass("active");
            $("#v3").removeClass("active");
        }
        event.preventDefault();
    });
    $("#v3").click(function(event){
        if ($("#v3").hasClass("active")) {
            $(".box").hide();
            $("#s2").fadeTo(0, 0);
            $("#s3").fadeTo(0, 0);
            $("#s1").removeClass("v2 v3");
            $("#v1").removeClass("active");
            $("#v3").removeClass("active");
            $("#v3").removeClass("active");
        } else {
            $(".box").addClass("show-th");
            $(".box").show();
            $("#s2").fadeTo(0, 1);
            $("#s3").fadeTo(0, 1);
            $("#d1").fadeTo(0, 1);
            $("#d2").fadeTo(0, 1);
            $("#s1").addClass("v2 v3");
            $("#v3").addClass("active");
            $("#v1").removeClass("active");
            $("#v2").removeClass("active");
        }
        event.preventDefault();
    });

    $(document).keypress(function(eventObject){
      //console.log(eventObject.which);
      if (eventObject.which == 96 || eventObject.which == 126 || eventObject.which == 48 || eventObject.which == 1105 || eventObject.which == 1025) { // `~ёЁ0
          if ($(".box").hasClass("show-th")) {
              $(".box").removeClass("show-th");
          } else {
              $(".box").addClass("show-th");
          }
      }
      if (eventObject.which >= 49 && eventObject.which <= 51) {
          $("#v" + (eventObject.which - 48)).click();
      }
      if (eventObject.which == 52) { //4
          if (!$("#v3").hasClass("active")) {
              $("#d2").fadeTo(0, 0);
              $("#s3").fadeTo(0, 1);
              $("#d1").fadeTo(0, 1);
          }
      }
      if (eventObject.which == 53) { //5
          if (!$("#v3").hasClass("active")) {
              $("#d1").fadeTo(0, 0);
              $("#s3").fadeTo(0, 1);
              $("#d2").fadeTo(0, 1);
          }
      }
      if (eventObject.which == 54) { //6
          location = location;
      }
      if (eventObject.which == 32) { // пробел
          if (!$(".box").is(":visible")) { $("#v1").click(); }
          else if (!$("#s1").hasClass("v2")) { $("#v2").click(); }
          else { $("#v3").click(); }
      }
    });

  });
})(jQuery);
