//Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una 
//fecha válida. Si no es válida escribir un mensaje de error. Si es válida escribir 
//la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, 
//se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0.
let prompt = require('prompt-sync')();

let fecha = true

let dia = prompt('Introduzca día: ');
let mes = prompt('Introduzca mes: ');
let año = prompt('Introduzca año: ');
dia = Number(dia);
mes = Number(mes);
año = Number(año);

const nombreMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
                    "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

if (año <= 0){
    fecha = false;
}
if (mes < 1 || mes > 12 ){
    fecha = false;   
}
if (fecha){
let diaMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


if (dia < 1 || dia > diaMes[mes - 1]){
    fecha = false;
 }
}
if (fecha){
 console.log(`${dia} de ${nombreMeses[mes - 1]} de ${año}`);
}else{
    console.log("La fecha no es valida");
}