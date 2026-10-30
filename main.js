
const nombre = prompt("¿Cómo te llamás?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
const ciudad = prompt("¿En qué ciudad vivís?");

let edad = 2026 - anioNacimiento;

const mensaje = "Hola " + nombre + ", tenés " + edad + " años y vivís en " + ciudad + ".";

alert(mensaje);
console.log(mensaje);

