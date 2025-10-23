//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del 
// programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá calcular su cuadrado y la 
// raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y su resultado 
// («Del número X, su potencia es X y su raíz X» ). Para calcular la raíz cuadrada se puede usar la función 
// interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')();


let numero  = prompt('Introduzca numero: ');

if (Number(numero)<=0){
    console.log('Error');
}else{
    numero = Number(numero);
}
if (Number(numero) > 0){
    let cuadrado = numero * numero;
    let raiz = Math.sqrt(numero);

    console.log(`Del numero ${numero}, su potencia es ${cuadrado} y su raiz ${raiz}`);
}
