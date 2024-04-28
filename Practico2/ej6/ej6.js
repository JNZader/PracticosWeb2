/**6.- dado el siguiente objeto: 
const personas = [ 
 { 
 id: 1, 
datos: { 
 nombre: "Jose", 
 edad: 39, 
 empleado: true, 
 hobbies: ["tenis"], 
 }, 
 }, 
 { 
 id: 2, 
 datos: { 
 nombre: "Manuel", 
 edad: 23, 
 empleado: true, 
 }, 
 }, 
 { 
 id: 3, 
 datos: { 
 nombre: "Abigail", 
 edad: 25, 
 empleado: false, 
 hobbies: ["basquet", "tenis", "futbol"], 
 }, 
 }, 
 { 
 id: 4, 
 datos: { 
 nombre: "Fabiana", 
 edad: 12, 
 empleado: true, 
 hobbies: ["tenis", "golf"], 
 }, 
 }, 
]; 
Para cada punto realice una función flecha que retorne: 
a.- los datos de la persona 3 
b.- Un array con todos los datos (solo el detalle, no el id) 
c.- Un array de las personas mayores a 24 años 
d.- Un array de personas ordenado por el nombre de la persona 
e.- Un array de personas que al menos tenga 2 hobbies 
f.- Un array con todos los diferentes hobbies que existen en personas 
g.- Un array de los nombres de personas que sean empleados.
 */
const personas = [ 
    { 
    id: 1, 
   datos: { 
    nombre: "Jose", 
    edad: 39, 
    empleado: true, 
    hobbies: ["tenis"], 
    }, 
    }, 
    { 
    id: 2, 
    datos: { 
    nombre: "Manuel", 
    edad: 23, 
    empleado: true, 
    }, 
    }, 
    { 
    id: 3, 
    datos: { 
    nombre: "Abigail", 
    edad: 25, 
    empleado: false, 
    hobbies: ["basquet", "tenis", "futbol"], 
    }, 
    }, 
    { 
    id: 4, 
    datos: { 
    nombre: "Fabiana", 
    edad: 12, 
    empleado: true, 
    hobbies: ["tenis", "golf"], 
    }, 
    }, 
   ]; 
/**A) */
const persona3=()=>personas.find(persona=>persona.id===3).datos;
/**B) */
const todosLosDatos=()=>personas.map(persona=>persona.datos);
/**C) */
const personasMas24=()=>personas.filter(persona=>persona.datos.edad>24).map(persona=>persona.datos);
/**D) */
const personasPorNombre=()=>personas.sort((a,b)=>a.datos.nombre.localeCompare(b.datos.nombre));
/**E) */
const personasCon2Hobbies=()=>personas.filter(persona=>persona.datos.hobbies&&persona.datos.hobbies.length>=2);
/**F) */
const difHobbies=()=>[...new Set(personas.flatMap(persona=>persona.datos.hobbies))];
/**G) */
const nombresEmpleados=()=>personas.filter(persona=>persona.datos.empleado).map(persona=>persona.datos.nombre);