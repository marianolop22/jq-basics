$(function(){
    'use strict';

    $('.navegacion').show();

    let proximosViajes = ['Londres','Valencia','Madrid','Paris','Milan'];

    // console.log(proximosViajes);
    $.each( proximosViajes, function (i,v) {
        console.log(i,v);

        if (i==0) {
            $('aside').append('<h2>Proximos viajes</h2>');
            
        }

        $('aside').append(`<li>${v}</li>`);
        
    })


    let viajesPorFecha = {
        primero: 'Londres',
        segundo: 'Valencia',
        tercero: 'Madrid',
        cuarto: 'PAris',
        quinto: 'Milan'
    };

    $.each ( viajesPorFecha, function (i,v) {
        $('aside').append (`<li>${i}  - ${v}</li>`);
    });

});