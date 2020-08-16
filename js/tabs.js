$(function(){
    'use strict';

    $('.nuestros-servicios div:first').show();

    $('.servicios nav a:first').addClass ('activo');

    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs(e) {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');

        e.preventDefault();
        let enlace = $(this).attr('href');

        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    }

});