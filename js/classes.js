$(function(){
    'use strict';

    $('div.logo img').addClass('activo');

    $('.navegacion').show();
    // $('.navegacion nav ul li:first').addClass('activo');
    // $('main article:first').addClass('activo');

    $('.navegacion ul li a').on('click', function (e) {

        $('.navegacion ul li a').removeClass ('activo');

        e.preventDefault(); //hace que el browser no ejecute el evento por defecto
        $(this).addClass('activo');
    })

});