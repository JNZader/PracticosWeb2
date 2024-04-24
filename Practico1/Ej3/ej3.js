/*3.- Escriba un programa javascript que defina una función flecha que permita redondear un 
número a una cantidad específica de dígitos. 
Utilice los template literals para imprimir los datos. 
Ej: 
console.log(round(1.005, 2));  1.01 
console.log(round(1.05, 2));  1.05 
console.log(round(1.0005, 2));  1
*/

let round = (numero, decimales) => {
  return Number(numero.toFixed(decimales));
};

console.log(`round(1.005, 2) → ${round(1.005, 2)}`);
console.log(`round(1.05, 2) → ${round(1.05, 2)}`);
console.log(`round(1.0005, 2) → ${round(1.0005, 2)}`);