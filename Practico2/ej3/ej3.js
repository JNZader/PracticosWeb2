/*3.- Programe un array listaPersonas que tenga como contenido objetos personas que 
tengan un nombre, apellido, documento, altura y peso. 
Defina una función que retorne dichos objetos. 
Ej. 
let listaPersonas = 
[{nombre:”juan”,apellido:”Gomez”,documento:”22112277”,altura:175,peso:80},{…},{
…}] 
Luego recorra la lista usando un bucle for para imprimir el nombre y apellido de cada 
persona. 
Realice el mismo procedimiento usando los bucles for..in, for..of y forEach 
Modifique la función creadora de objetos para que los objetos creados incorporen una 
función que retorne el índice de masa corporal (IMC). 
Vuelva a recorrer la lista de personas imprimiendo también el IMC. */
class Persona {
  constructor(nombre, apellido, documento, altura, peso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.altura = altura;
    this.peso = peso;
  }

  calcularIMC() {
    return this.peso / Math.pow(this.altura / 100, 2);
  }
}

function crearPersona(nombre, apellido, documento, altura, peso) {
  return new Persona(nombre, apellido, documento, altura, peso);
}

const listaPersonas = [
    crearPersona("juan", "Gomez", "22112277", 175, 80),
    crearPersona("Maria", "Lopez", "33223344", 160, 60),
    crearPersona("Pedro", "Rodriguez", "44334455", 180, 90),
];

// for
console.log("For:");
for (let i = 0; i < listaPersonas.length; i++) {
  const persona = listaPersonas[i];
  console.log(
    `${persona.nombre} ${persona.apellido} (${persona.documento}): ${persona
      .calcularIMC()
      .toFixed(2)}`
  );
}

// for...in
console.log("For...in:");
for (const index in listaPersonas) {
  const persona = listaPersonas[index];
  console.log(
    `${persona.nombre} ${persona.apellido} (${persona.documento}): ${persona
      .calcularIMC()
      .toFixed(2)}`
  );
}

// for...of
console.log("For...of:");
for (const persona of listaPersonas) {
  console.log(
    `${persona.nombre} ${persona.apellido} (${persona.documento}): ${persona
      .calcularIMC()
      .toFixed(2)}`
  );
}

// forEach
console.log("forEach:");
listaPersonas.forEach((persona) => {
  console.log(
    `${persona.nombre} ${persona.apellido} (${persona.documento}): ${persona
      .calcularIMC()
      .toFixed(2)}`
  );
});
