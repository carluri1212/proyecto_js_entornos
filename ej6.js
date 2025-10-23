//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
// Diseñar un algoritmo para este propósito.
const prompt = require('prompt-sync')();


let ninos= prompt('Introduzca numero niños: ');
ninos = Number(ninos);

let ninas = prompt('Introduzca numero niñas: ');
ninas = Number(ninas);
let total = ninos + ninas;
let porcentajeNinos = (ninos / total) * 100;
let porcentajeNinas = (ninas / total) * 100;

        console.log(`Porcentaje de niños: ${porcentajeNinos}%`);
        console.log(`Porcentaje de niñas: ${porcentajeNinas}%`);
