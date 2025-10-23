//Se pide un algoritmo que lea dos números desde teclado, calculando y escribiendo en pantalla el 
// valor de su suma, resta, producto y división.
let prompt = require('prompt-sync')();

let okNums = true;

let a = prompt('Introduzca a:');

if (Number(a).isNaN){
    //declaracion de cadena con backtip ` que permite interpolacion de variables ${a}
    console.log(`a = ${a} no es un numero valido!!!`);
    okNums = false;
} else{
a = Number(a);
}
let b = prompt ('Introduzca b: ');
if (Number(b).isNaN){
    //declaracion de cadena con backtip ` que permite interpolacion de variables ${b}
    console.log(`b = ${b} no es un numero valido!!!`);
    okNums = false;
}else{
b = Number(b);
}
if (okNums){

    let suma = a + b;
    let resta = a - b;
    let prod = a * b;
    console.log(`suma = ${suma},resta = ${resta}, producto = ${prod}`);
}

