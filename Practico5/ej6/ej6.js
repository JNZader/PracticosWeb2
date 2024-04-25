/**Tarea 6 
Desarrolle una página que permita subir un archivo de texto. 
Una vez subido, la aplicación mostrará un formulario que permita elegir el número de 
línea y número de palabra que se necesita recuperar del archivo. Los datos del número 
de línea y palabra deben enviarse por AJAX, recuperando por este medio la palabra 
correcta o un objeto {error:true} en caso de no existir. 
Muestre la palabra recuperada en la misma página o un cartel “Palabra no disponible” 
Ej. si el archivo tiene la siguiente información: 
Jack Ryan (también conocida como "Tom Clancy's Jack Ryan") es una serie de 
televisión web de suspense de acción política estadounidense. 
Está basada en personajes de la ficción Ryanverse creada por Carlton Cuse y Graham 
Roland,1 a partir de los personajes creados por el escritor Tom Clancy. 
Se estrenó oficialmente el 31 de agosto de 2018 en Amazon Prime Vídeo. 
La búsqueda de la línea 3 y palabra 2 retornará “estrenó” 
La búsqueda de la línea 1 y palabra 6 retornará Tom 
La búsqueda de la línea 4 y palabra 2 retornará {error:true}  */