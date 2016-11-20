$(document).ready(function(){                      
  $("nav#menu_btn #menu").click(function(){
    $("nav#menu_btn #menu span").toggleClass("close");
    $( "div#menu_open").fadeToggle( "fast", "linear" );
  }); 

  $("div#menu_open ul li a").click(function(){
    $("nav#menu_btn #menu span").removeClass("close");
    $( "div#menu_open").fadeOut( "fast", "linear" );
  }); 


});

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

    if (scroll >= 1) {
        $(".inicio").addClass("active");
    } else {
        $(".acerca").removeClass("active");
    }

    if (scroll >= 500) {
        $(".acerca").addClass("active");
        $(".inicio").removeClass("active");
    }  else {
        $(".acerca").removeClass("active");
    }

    if (scroll >= 2100) {
        $(".acerca").removeClass("active");
        $(".trabajo").addClass("active");
    } else {
        $(".trabajo").removeClass("active");
    }


    if (scroll >= 5350) {
        $(".trabajo").removeClass("active");
        $(".contacto").addClass("active");
    } else {
        $(".contacto").removeClass("active");
    }

});

//acciones precarga
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow", function(){
   });
})




$(document).ready(function(){
    $(".contact, .light_button, .contact-button").click(function(){
    $(".heycontact").fadeIn();
    });

    $(".close").click(function(){
    $(".heycontact").fadeOut();
    });

});


