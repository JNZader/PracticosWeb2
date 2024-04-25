/*1.- Construir 2 clases (Persona y Empleado) 
Persona debe tener: 
 nombre (pública) 
 edad (pública) 
 altura (privada) 
 peso (privada) 
Empleado es una persona y tiene un sueldo (privado). 
Ambas clases deben tener un método público que permita imprimir un resumen de su 
información. 
Cree instancias de las clases y compruebe su funcionamiento. 
Compruebe el polimorfismo creando una función que reciba por parámetro cualquiera de 
los objetos e imprima su información. 
Agregue un método a la clase Empleado que permita llevar la cantidad de instancias 
creadas. */
class Persona {
  constructor(nombre, edad, altura, peso) {
    this.nombre = nombre;
    this.edad = edad;
    this._altura = altura;
    this._peso = peso;
  }
  get altura() {
    return this._altura;
  }
  setAltura(altura) {
    this._altura = altura;
  }
  getPeso() {
    return this._peso;
  }

  setPeso(peso) {
    this._peso =peso;
  }
  toString() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Altura: ${this._altura}, Peso: ${this._peso}`;
  }
}
class Empleado extends Persona{
    static contEmpleado=0;
    constructor(nombre, edad, altura, peso,sueldo){
        super(nombre, edad, altura, peso);
        this._sueldo = sueldo;
        this._idEmpleado=++Empleado.contEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    setSueldo(nuevoSueldo){
        this._sueldo = nuevoSueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    static cantidadEmpleados(){
        return Empleado.contEmpleado;
    }
    toString(){
        return `${super.toString()}, Sueldo: ${this._sueldo}, ID Empleado: ${this.idEmpleado}`;
    }
}
const persona1 = new Persona("Juan", 30, 1.75, 70);
const empleado1 = new Empleado("María", 25, 1.65, 60, 30000);

console.log("Resumen de Persona:");
console.log(persona1.toString());

console.log("Resumen de Empleado:");
console.log(empleado1.toString());

console.log(`Cantidad de empleados creados: ${Empleado.contEmpleado}`);
