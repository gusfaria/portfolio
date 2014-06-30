//toggle about
// $('a.navAbout').click(function(){ 
//   $('#about').slideToggle();
//   return false;
// });

//smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if(target.selector == "#main"){
          if($(window).scrollTop() > 600){
            $('#about').slideDown();
          } else {
            $('#about').slideToggle();
          }
        }
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
});

$( document ).ready(function() {
  if(location.hash == "#main"){
    $('#about').slideDown("slow");
  };
});

// $(document).on("scroll", function(){
//   if($(window).scrollTop() > 600)  {
//     $('#about').slideUp();
//   }
// });

  

