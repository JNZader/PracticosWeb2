let round = (numero, decimales) => {
  return Number(numero.toFixed(decimales));
};

console.log(`round(1.005, 2) → ${round(1.005, 2)}`);
console.log(`round(1.05, 2) → ${round(1.05, 2)}`);
console.log(`round(1.0005, 2) → ${round(1.0005, 2)}`);
