//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. 
//En el caso de ser 0, debe visualizar “el número no es par ni impar”
//(para que un número sea par, se debe dividir entre dos y que su resto sea 0).
let prompt = require('prompt-sync')();

let numero = prompt('Introduzca numero:');
numero = Number(numero);

if (numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}if (numero == 0){
    console.log("El numero no es par ni impar"); 
}
