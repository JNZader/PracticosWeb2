/*2.- Escriba un programa javascript que muestre en una página la fecha y hora en tiempo 
real. 
El formato de la fecha debe ser: 
Hoy es Jueves, 22 de Marzo de 1998 
La hora actual es 8:23:05 PM 
Utilice los template literals para imprimir los datos. 
Ej: innerHTML = (`La hora actual es : ${hora}:${minuto}:${segundo} ${pmam}`); 
Nota: Averigue como funciona la función toLocaleDateString*/
//Declaramos las variables necesarias
function mostrarFechaHora() {
  let dia = new Date().getDay();

  let mes = new Date().toLocaleString('es-ES', { month: 'long' });

  let anio = new Date().getFullYear();

  let hora = new Date().getHours();

  let minuto = new Date().getMinutes();

  let segundo = new Date().getSeconds();

  let pmam = hora >= 12 ? "PM" : "AM";

  let horaActual = `${hora}:${minuto}:${segundo} ${pmam}`;

  let fechaActual = `${dia} de ${mes} de ${anio}`;

  let mensaje = `hoy es ${fechaActual} <br> la hora actual es ${horaActual}`;

  document.getElementById("fecha").innerHTML = mensaje;
}

setInterval(mostrarFechaHora, 1000);

mostrarFechaHora();
