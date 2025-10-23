//Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.
//Esta forma de importar paquetes es la nativa de node y se compone por ser commonJS modules
//                 create__________()
let prompt = require('prompt-sync')();

let flagFormatoOk = true;

let a = prompt('Introduzca a: ');
a = Number(a);


if ( Number.isNaN(a)){
    // Backtip ` declara cadena con capacidad de interpolacion de cadena
    console.log(`Error de formato a = ${a} no es un numero!`);
    flagFormatoOk = false;
}
let b = prompt('Introduzca b: ');
b = Number(b);

if ( Number.isNaN(b)){
    console.log(`Error de formato b = ${b} no es un numero!`);
    flagFormatoOk = false;
}
if (flagFormatoOk) {
    //Hago los calculos o procesos 
    if (a > b) {
        console.log(`El mayor es ${a} `);
    }else if (a == b){
        console.log(`Son iguales`);
    } else {
        //b > a
        console.log('El mayor es ' + b);
    }
} else {
    console.log('no puedo calcular, formato de numero incorrecto!!!');
    
}