$(function(){
    'use strict';

    $('main').on({
        click: function() {
            $(this).addClass('fondorojo activo');
        }, mouseenter: function() {
            $(this).addClass('fondorojo');
        }, mouseleave: function () {
            $(this).addClass('activo');
        }
    });



});