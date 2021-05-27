<h1>DelilahResto</h1>

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
<li>npm init</li>
<li>npm i -g nodemon</li>
<li>npm i --save express</li>
<li>npm i --save body-parser</li>
<li>npm i --save jsonwebtoken</li>
<li>npm -i --save dotenv</li>
<li>npm -i --save sequelize</li>
<li>npm -i -- save mysql2</li>
<li>npm -i --save bcrypt</li>

3) Acceder a la base de datos:
Abrir https://remotemysql.com/ 
ir a PhpMyAdmin ( Se abrirá la web: https://webphpmyadmin.com/)
Ver información de acceso a la DB en el archivo .env (Host, User y Pass)

4) Descargar el archivo openapi.yaml y abrir la página de Swagger (https://editor.swagger.io) y en la pestaña "File" poner "import file" e importar el archivo descargado.
En ese archivo tenemos el router y la indicación de qué hace cada endpoint.

5) Iniciar proyecto:
Una vez que tenemos el acceso a la DB y inicializar la app. En la consola ejecutar "nodemon app". Importante: Verificar que en el archivo app.js en el db.init() el force esté en FALSE, si no se borrará el user ADMIN que hay creado para poder probar la app.

6) IMPORTANTE: Por defecto la DB viene con un user Admin creado. Probar en postman en el endpoint GET http://localhost:3000/api/usuarios/login el siguiente JSON:
{
  "usuario":"admin,
  "clave":"acamica1234"
}
Esto devolverá el token de admin que se requiere en los demás endpoints en el Bearer authorization

7) Testear los endpoints provistos desde Postman para poder hacer uso de la API y base de datos generadas. Los cambios en la DB se verán reflejados en el phpMyAdmin de remotemysql logueado con los datos provistos en el .env

