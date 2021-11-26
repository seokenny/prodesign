function openburger() {
    var a = document.getElementById("burger");
    a.classList.toggle("is-active");
    var b = document.getElementById("mnav_slide");
    b.classList.toggle("slide_mnav");
    // var c = document.getElementById("mnav_slide-overlay");
    // c.classList.toggle("slide_mnav-shadow");
}

$(window).on('unload', function() {
    $("html, body").animate({scrollTop: 0}, 700);
   });
  
  $(".backtotop_svg").click(function() { 
    $("html, body").animate({scrollTop: 0}, 700);
  });
  
  $(".backtotop").click(function() { 
    $("html, body").animate({scrollTop: 0}, 700);
  });
  
  $(".backtotop_text").click(function() { 
    $("html, body").animate({scrollTop: 0}, 700);
  });