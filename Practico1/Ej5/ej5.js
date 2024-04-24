/*
5.- Refactorize el siguiente código utilizando sintaxis ES6 (Use rest y arrow función) 
function filterOutOdds() { 
 var nums = Array.prototype.slice.call(arguments); 
 return nums.filter(function(num) { 
 return num % 2 === 0 
 }); 
} 
*/
const filtrarPares = (...nums) => nums.filter(num => num % 2 === 0);

const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = filtrarPares(...numeros);
console.log(numerosPares);