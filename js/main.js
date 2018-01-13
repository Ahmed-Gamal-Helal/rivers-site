$(function(){
    'use strict';
    $("nav-tabs ul li a, ul.navbar-nav li").click(function (){
        $(this).addClass('active').siblings().removeClass('active');
        // $(this).attr('color', '#F00 !important');
    });

});

