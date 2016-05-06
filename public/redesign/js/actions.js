$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        },1800);
        return false;
      }
    }
  });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".heyandrw-home").fadeIn("fast");
    } else {
        $(".heyandrw-home").fadeOut("fast");
    }

    if (scroll >= 500) {
        $(".about").addClass("active");
    } else {
        $(".about").removeClass("active");
    }

    if (scroll >= 1400) {
        $(".about").removeClass("active");
    }

    if (scroll >= 1600) {
        $(".work").addClass("active");
    } else {
        $(".work").removeClass("active");
    }

});

//acciones precarga
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow", function(){
   });
})




$(document).ready(function(){
    $(".contact").click(function(){
    $(".heycontact").fadeIn();
    });

    $(".close").click(function(){
    $(".heycontact").fadeOut();
    });

});


