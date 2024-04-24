/*7.- Escriba una función potenciarYRetornarArgumentos() que acepte un array y un número 
variable de argumentos. La función debe retornar un nuevo array con los valores del array 
original además de los argumentos pasados elevados al cuadrado. 
Ej. 
potenciarYRetornarArgumentos ([1,2,3],4,8) // [1,2,3,16,64] 
potenciarYRetornarArgumentos ([2],10,4) // [2, 100, 16]  */
const potenciarYRetornarArgumentos=(array,...argumentos)=>{
    let potencia=[];
    for(const num of array){
        potencia.push(num**2);
    }
    for(const num of argumentos){
        potencia.push(num**2);
    }
    return potencia;
}