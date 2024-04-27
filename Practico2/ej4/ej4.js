/*4.- Suponga que tiene una lista de valores con elementos duplicados. Por ej. 
[‘jose’,’juan’,’ana’,’jose’,’carlos’,’rosa’,’ana’] 
Escriba al menos 2 alternativas para generar una lista sin los valores duplicados.*/

function arraySet(array){
    const set=new Set(array);
    return Array.from(set);
}

const original = ["hola", "mundo", "hola", "javascript", "mundo"];
const sinRepeticiones = arraySet(original);
console.log(sinRepeticiones);


///////////////////////////////////////////////////////////////////////////////////////////////////////

function eliminarRepetidos(array){
    const nuevoArray=[];
    array.array.forEach(element => {
        if(!nuevoArray.includes(element)){
            nuevoArray.push(element);
        }
    });
    return nuevoArray;
}

const arrayOriginal = ["hola", "mundo", "hola", "javascript", "mundo"];
const arraySinRepeticiones = arraySet(arrayOriginal);
console.log(arraySinRepeticiones);