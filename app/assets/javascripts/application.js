// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready (function(){
  
  // sequntial animation for the contact-us form 
  $( '#contact-form,#contact-form h2,#contact-form span,#contact-form form' ).css('visibility', 'hidden');

  $( "#work-with-us,#work-with-us-footer" ).click(function() {
    $( "#contact-form:not(#contact-form h2)" ).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},500);
    $( "#contact-form h2" ).css({opacity: 0.0, visibility: "visible"}).delay(500).animate({opacity: 1.0},500);
    $( "#contact-form span").each(function(i){
       $(this).css({opacity: 0.0, visibility: "visible"}).delay(1000).delay(500*i).animate({opacity: 1.0},500);
    });
    $( "#contact-form form" ).css({opacity: 0.0, visibility: "visible"}).delay(2500).animate({opacity: 1.0},500);

  });

  // smooth scroll 
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });

  // footer animation on scroll
  $(window).scroll(function(){
    if($(document).scrollTop() > 500)
    {
      $('footer').fadeIn(500);
    }
    else
    {
      $('footer').fadeOut(500);
    }
  }); 

  // parallax
  $('#contact').parallax({
    speed : 0.25
  });

  // smoothing the page scroll
  $("html").niceScroll();

});
