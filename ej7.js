//Una tienda ofrece un descuento del 15% sobre el total de la compra
//durante el mes de octubre. Dado un mes y un importe, calcular 
//cuál es la cantidad que se debe cobrar al cliente.
let prompt = require('prompt-sync')();

let importe = prompt('Introduzca importe:');
importe = Number(importe);

let mesPagado = prompt('Introduzca mes: ');

if (mesPagado == "Octubre"){
   let descuento = (importe / 100) * 15; 
   let importeDesc = importe - descuento;
   console.log(`Cuesta ${importeDesc} euros`);
}else{
    console.log(`Cuesta ${importe} euros`);
}
