$(function(){
    'use strict';

    $('.logo img').click(function (e) { 
        e.preventDefault();
        $('main article:first').slideUp(1000);
        
    });

    $('aside').click(function (e) { 
        e.preventDefault();
        $('main article:first').slideDown(1000);
    });



});