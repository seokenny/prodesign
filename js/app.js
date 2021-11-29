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

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// var prevScrollpos2 = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos2 = window.pageYOffset;
//   if (prevScrollpos2 > currentScrollPos2) {
//     document.getElementById("nav2").style.top = "0";
//   } else {
//     document.getElementById("nav2").style.top = "-75px";
//   }
//   prevScrollpos2 = currentScrollPos2;
// }