var fecha = new Date(); // probando el metodo Date() y sus diferentes atributos
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var textoHora = `
    El año es: ${year}
    EL mes es: ${mes}
    el dia es: ${dia}
    la hora es: ${hora}
`;
console.log(textoHora);
console.log(Math.ceil(Math.random()*10000))// probando el metodo math() para realizar opraciones matematicas y sus diferentes atributos