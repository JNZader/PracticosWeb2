/**6.- Instale de forma global el generador de aplicaciones “express-generator”.
Luego genere el esqueleto de directorios de la aplicación usando el comando express ej: 
express todo --view=pug 
Este creara una carpeta con todas las carpetas y archivos necesarios para arrancar el 
proyecto usando el motor de templates PUG. 
Muevase a la carpeta del proyecto e instale las dependencias. 
cd todo 
npm install
Para ver todos los registros internos utilizados en Express, establezca la variable de 
entorno DEBUG en express:* cuando inicie la aplicación.
SET DEBUG=todo:* & npm start 
Verifique en el navegador http://localhost:3000/ el acceso a la aplicación 
A continuación, veremos cómo reestablecer el servidor cuando se producen 
cambios en los archivos fuentes.
npm install -g nodemon 
Verifique que se agregó la dependencia en package.json. 
Agregue funcionabilidad para hacer una aplicación “To do list”. Utilice un archivo json 
en el servidor para guardar la información de la lista en el servidor.
a.- Rutas: Son necesarias 3 rutas (listar ítems, agregar ítem y borrar ítem) 
Ej. /todo 
 /todo/add 
 /todo/delete/:id 
Tip: Utilice express.urlencoded() para obtener el ítem del formulario. 
Nota: Desarrolle una sola vista todo.pug que presente la lista de ítems actual al usuario. 
Para agregar y borrar los elementos utilice Ajax. */