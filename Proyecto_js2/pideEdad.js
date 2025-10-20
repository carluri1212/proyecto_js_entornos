console.log("Programa pide edad");


prompt = require('prompt-sync')();
//
// get input from the user.
//
edadStr = prompt('Que edad tienes?');

edad = Number(edadStr);

console.log(typeof edad);

console.log("Tienes " + edad + " años. ");

edadjubilacion = edad + 40;

console.log("Te jubilas a los " + edadjubilacion);