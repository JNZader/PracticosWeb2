/**2.- Desarrolle un módulo fecha que pueda indicarnos la fecha y hora actual. Cree algún 
código que requiera el módulo y pruebe su funcionamiento en el navegador.  */
const fechaActual=()=>{
    const fecha=new Date();
    return fecha.toLocaleString();
}

console.log('Fecha y hora actual: ',fechaActual())