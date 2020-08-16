$(function(){
    'use strict';

    $('.navegacion').show();

    /*
    $('div.logo img').on('click', cargarAjax);

    function cargarAjax() {
        $.ajax('promociones.txt', {
            success: agregarContenido,
            type:'GET',
            datatype:'text'
        })
        
    }

    function agregarContenido(data, status, jqxhr) {
        $('aside').text(data);
        console.log(status);
        
    }
    */

    $('aside').load('promociones.html');


});