//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
// Diseñar un algoritmo para este propósito.
const prompt = require('prompt-sync')();


let niños= prompt('Introduzca numero niños: ');
niños = Number(niños);

let niñas = prompt('Introduzca numero niñas: ');
niñas = Number(niñas);
let total = niños + niñas;
let porcentajeNiños = (niños / total) * 100;
let porcentajeNiñas = (niñas / total) * 100;

        console.log(`Porcentaje de niños: ${porcentajeNiños}%`);
        console.log(`Porcentaje de niñas: ${porcentajeNiñas}%`);
