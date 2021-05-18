DelilahResto

Tercer trabajo del curso de Desarrollo Web Full Stack de Acámica.

Tecnologías utilizadas:
Node js
Express
MySQL
Postman
Sequelize
Swagger
JWT

Instalación e inicialización del proyecto:
1) Clonar el proyecto:
Clonar el repositorio desde https://github.com/ManuQ14/delilah-resto

Desde consola ejecutar el comando:
git clone https://github.com/ManuQ14/delilah-resto

2) Instalar las dependencias:
npm install
npm i -g nodemon
npm i --save express
npm i --save body-parser
npm i --save jsonwebtoken
npm -i --save dotenv
npm -i --save sequelize
npm -i — save mysql2
npm -i --save bcrypt

3) Acceder a la base de datos:
Abrir https://remotemysql.com/ 
ir a PhpMyAdmin ( Se abrirá la web: https://webphpmyadmin.com/)
Ver información de acceso a la DB en el archivo .env (Host, User y Pass)

4) Iniciar proyecto:
Es necesario poner 'force: true' al menos una vez en el archivo 'app.js'.
Utilizar 'force: true' sólo la primera vez que se corre la aplicación, y luego pasarlo a 'false', ya que, en caso contrario, las tablas se van a borrar y volver a crear.
Iniicar la aplicación con el comando:
nodemon app

5) Documentación de la API:
Abrir el archivo openapi.js e importarlo en Swagger
IMPORTANTE: Para crear un usuario ADMIN, es necesario agregar la propiedad 'isAdmin: true', ya que por defecto si no agregamos esta propiedad el usuario no tiene permisos de edición.
6) Preparado para utilizar!
Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas
