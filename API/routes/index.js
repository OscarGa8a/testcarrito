// Importamos express
const express = require('express');
// Obtenemos el router de express para configurar las rutas
const router = express.Router();
// Obtenemos el controlador del carro
const carController = require('../controllers/carController');

module.exports = () => {
    
    // Obtiene el modelo de carro via GET
    router.get('/car', carController.getDataCars);
    // Agrega un nuevo modelo de carro via POST
    router.post('/car', carController.newDataCar);
    // Obtene el modelo de un carro
    router.get('/car/:id', carController.getDataCar);
    // Actualiza el modelo de un carro
    router.put('/car/:id', carController.updateDataCar);
    // Elimina el modelo de un carro
    router.delete('/car/:id', carController.deleteCar);
    // Renderiza el index
    router.get('/', (req, res, next) => {
        res.render('index');
    });
    // Se retorna el router para ser utilizado en el index principal
    return router;
}