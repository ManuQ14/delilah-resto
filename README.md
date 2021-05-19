DelilahResto

Tercer trabajo del curso de Desarrollo Web Full Stack de Acámica.

Tecnologías utilizadas:
<li>Node js</li>
<li>Express</li>
<li>MySQL</li>
<li>Postman</li>
<li>Sequelize</li>
<li>Swagger</li>
<li>JWT</li>

Instalación e inicialización del proyecto:
1) Clonar/Descargar el proyecto desde: https://github.com/ManuQ14/delilah-resto



2) Instalar las dependencias:
<li>npm install</li>
<li>npm i -g nodemon</li>
<li>npm i --save express</li>
<li>npm i --save body-parser</li>
<li>npm i --save jsonwebtoken</li>
<li>npm -i --save dotenv</li>
<li>npm -i --save sequelize</li>
<li>npm -i — save mysql2</li>
<li>npm -i --save bcrypt</li>

3) Acceder a la base de datos:
Abrir https://remotemysql.com/ 
ir a PhpMyAdmin ( Se abrirá la web: https://webphpmyadmin.com/)
Ver información de acceso a la DB en el archivo .env (Host, User y Pass)

4) Iniciar proyecto:
Es necesario poner 'force: true' al menos una vez en el archivo 'app.js'.
Utilizar 'force: true' sólo la primera vez que se corre la aplicación, y luego pasarlo a 'false', ya que, en caso contrario, las tablas se van a borrar y volver a crear.
Iniicar la aplicación con el comando:
nodemon app

5) IMPORTANTE: Para crear un usuario ADMIN, es necesario agregar la propiedad 'isAdmin: true' (en el archivo app.js), ya que por defecto si no agregamos esta propiedad el usuario no tiene permisos de edición.
6) Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas
