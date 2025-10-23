//Lee desde entrada dos variables numéricas A y B. Con ellas se pide realizar un algoritmo 
// que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.
var prompt = require('prompt-sync')();
//
// get input from the user.
//
var a = prompt('Introduzca a:  ');
//typeof a === 'string'
a = Number(a);
//typeof a === 'number'
let b = prompt ('Introduzca b: ');
b = Number(b);

//patron de intercambio de variables
let aux = a;
a = b;
b = aux;

//Printo mediante interpolacion de cadena en JS con  `${variable}
console.log(`El valor de a = ${a} y b = ${b}`);