
$( document ).ready(function() {
  if(location.hash == "#main"){
    $('#about').slideDown("slow");
  };
});


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
            $('article#logo_wrapper img').addClass('hide');
          } else {
            $('#about').slideToggle();
            $('article#logo_wrapper img').toggleClass('hide');
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


  

