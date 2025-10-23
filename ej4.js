//Solicita por teclado tres números; si el primero es negativo, muestra el producto de 
// los tres y si no lo es, muestra la suma.

const prompt = require('prompt-sync')();

let okNums = true;

let a = prompt('Introduzca a:');

if (Number(a).isNaN){

    console.log(`a = ${a} no es un numero valido!!!`);
    okNums = false;
} else{
a = Number(a);
}
let b = prompt ('Introduzca b: ');
if (Number(b).isNaN){

    console.log(`b = ${b} no es un numero valido!!!`);
    okNums = false;
}else{
b = Number(b);
}
let c = prompt ('Introduzca c: ');
if (Number(c).isNaN){

    console.log(`a = ${c} no es un numero valido!!!`);
    okNums = false;
} else{
c = Number(c);
}
if (okNums){
}
Number> 0;
    let suma = a + b + c;
    console.log(suma);

if (Number < 0){
    let producto = a * b * c;
    console.log(producto);
}
