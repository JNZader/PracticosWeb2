/**Tarea 7 
Realice una página que permita requerir a través de Ajax métodos POST,DELETE y 
PUT. 
La página debe tener un formulario que permita introducir un número y 3 botones 
(agregar, borrar y modificar) 
El botón agregar debe enviar requerimientos del tipo: 
POST Localhost:3000/numero/1 y retornar [1] 
POST Localhost:3000/numero/2 y retornar [1,2] 
POST Localhost:3000/numero/5 y retornar [1,2,5] 
El botón borrar debe enviar requerimientos del tipo 
DELETE Localhost:3000/numero/1 y retornar [2,5] 
DELETE Localhost:3000/numero/5 y retornar [2] 
El botón modificar debe enviar requerimientos del tipo 
PUT Localhost:3000/numero/5/10 y retornar [10] 
PUT Localhost:3000/numero/10/6 y retornar [6] 
En caso de que las operaciones de DELETE y PUT no puedan realizar se debe retornar 
un objeto {error:true}. 
Siempre debe mostrarse el resultado de cada operación en la página. */