$(function(){
    'use strict';

    $('.navegacion').show();

    // $('article').children();
    // $('article').parent().children();
    // $('article:first').next();

    //$('main article:first h2').text(); //muestra el texto
    //$('main article:first h2').text('hola'); //cambia el texto

    //$('main article:first h2').html("<h1>Londres</h1>"); //cambio el h2 por un h1

    //$('.navegacion ul li:first a').text("home"); //cambio el texto del annchor


    // cambio de atributos
    //$('.navegacion ul li:first a').attr('href'); //veo el href
    //$('.navegacion ul li:first a').attr('href','http://www.udemy.com'); //cambio el href
    //$('.navegacion ul li:first a').attr('target','_blank'); //cambio el href

    //$('article:first img').attr('src');

    //cambiamos la imagen al hacer click
    // $('main article:first img').on('click', function () {
    //     let numero = Math.floor(Math.random() * 3) + 1;
    //     $(this).attr ('src','img/imagen_' + numero + '.jpg');
    // });

    //cambiando estilos de css con jquery
    $('.logo img').css ({'width': '600px'});

    $('main article h2').css({'color': '#db008d'});

    $('aside').css({'background-color': '#e1e1e1',
                    'text-transform': 'uppercase',
                    'padding':'20px'});

    $('.navegacion ul li a').on('mouseenter', cambiaColor);

    function cambiaColor () {
        $('.navegacion').css ('background-color','red');
    }


});