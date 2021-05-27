const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/api.router');
const config = require('./config');
const db = require('./models/index');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('La ruta accedida es: ' + req.path);


    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    //res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use('/api', router)

db.init().then(async () => {
        await db.sequelize.sync({
            force: false
        }).then(() => {
            console.log('Sincronización correcta con DROP');
        });
        app.listen(config.port, () => {
            console.log(`My app is running at http://localhost:${config.port}`)
        });
    })
    .catch(() => {
        console.log('No se pudo conectar con la DB debido a: ' + err);
    })