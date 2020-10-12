// Importamos el servidor
const express = require('express');
// Importamos las rutas
const routes = require('./routes');
// Importamos bodyparser
const bodyParser = require('body-parser');
// Importamos libreria para manejar rutas
const path = require('path');
//Importa variables de entorno
require('dotenv').config({path: 'variables.env'});

// Creamos el servidor
const app = express();

// Importamos mongoose
const mongoose = require('mongoose');

// Conectamos a mongoDB
mongoose.Promise = global.Promise;
// Ingresa la URL de la base de datos
mongoose.connect('mongodb+srv://oscarga8a:IngElec123@dbcluster.nhvz2.mongodb.net/car', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Hablitamos body-parser que permite detectar los parámetros en las peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitamos pug
app.set('view engine', 'pug');
// Añadimos las vistas, ingresando las rutas donde se encuentran
app.set('views', path.join(__dirname, './views'));

// Habilitamos routing
app.use('/', routes());

//Asigna el host
const host = process.env.HOST || '0.0.0.0';
//Asigna el puerto
const port = process.env.PORT || 3500;

// Asignamos puerto y arrancamos el servidor
app.listen(port, host, () => {
    console.log('Servidor iniciado');
});