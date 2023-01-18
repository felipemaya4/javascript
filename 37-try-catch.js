'use strict'
// con la estructura try catch podemos controlar los posibles errores que pueden aparecer durante la ejecucion del programa y nos indica que tipo de error es
try {
    // en esta seccion ponemos el codigo a ejecutar 
    var year = 2023
    alert(year);
    console.log(decodeURIComponent("https://victorroblesweb.com"))//este decodeURIComponet lo qu ehace es validar que la url que se le esta entregando se valida 
} catch (error) {
    // en esta seccion ponemos la accion a realizar segun sea conisderado
    alert("ha ocurrido un error");
    console.log(error);//mostrar el tipo de error que se presento
}

