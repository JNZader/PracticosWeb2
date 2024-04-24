/*6.- Escriba una función buscarMinimo que acepte un número variable de argumentos y 
retorne el valor mas chico. */
const buscarMinimo=(...numeros)=>{
    let minimo=numeros[0];
    for(const num of numeros){
        if(num <minimo){
            minimo=num;
        }
    }
    return minimo;
}
let numeros=[1,2,3,4,5,6,7,8,9,10];
let min=buscarMinimo(...numeros);
console.log(min);