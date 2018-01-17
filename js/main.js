$(function(){
    'use strict';
    $("nav-tabs ul li, ul.navbar-nav li").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
        // $(this).attr('color', '#F00 !important');
    });


    $("nav .container .navbar-collapse ul li a").on('click', function(event) {
       if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         var hash = this.hash;

         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 900, function(){
           window.location.hash = hash;
            });
        }
    });     
});
// AOS Set up
AOS.init({
    duration: 1600,
  });
