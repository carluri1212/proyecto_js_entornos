//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo 
//formativo de grado superior o no. Para acceder a un grado superior, si se tiene 
//un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado 
//una prueba de acceso.

let prompt = require('prompt-sync')();


let tieneBachiller = prompt('¿Tienes el título de bachiller?: ')
                                                   .toLowerCase()
                                                         .trim();


let pruebaAcceso = prompt('¿Has superado la prueba de acceso?: ')
                                                   .toLowerCase()
                                                         .trim();



if (tieneBachiller == 'si' ||  pruebaAcceso == 'si') {
  console.log(' Puedes acceder al ciclo formativo de grado superior.');

}else{
  console.log(' No puedes acceder al ciclo formativo de grado superior.');
}
