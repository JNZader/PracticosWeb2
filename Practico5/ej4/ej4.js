/**Tarea 4 
Escriba un programa que permita responder el resultado de los siguientes end-points: 
Localhost:3000/sumar/a/b 
Retorna la suma de a+b 
Localhost:3000/concat/a/b/c 
Retorna la concatenación de todos los parámetros pasados en la url separados por un 
espacio. Considere que la URL puede tener cualquier cantidad de parámetros. Ej “a b c” 
Localhost:3000/usuario/a/localidad/b 
Retorna el mensaje “El usuario a es de la localidad b” 
Localhost:3000/plusByJSON?jsonText={a:3,b:5} 
Retorna la suma de los valores de a y b 
Localhost:3000/echo?texto=holaquetal 
Retorna el contenido de la variable texto 
Localhost:3000/chequearNumeroPar/a 
Retorna status 400 si el parámetro a pasado no es par, un status 200 si el número es par 
y un status 401 si el parámetro no es un número.  */