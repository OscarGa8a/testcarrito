//Importamos el modelo de Carro
const Car = require('../models/Car');

// Se obtiene el modelo de carros
exports.getDataCars = async (req, res, next) => {
    // Por si el servidor se cae y no se puede agregar los datos a la DB
    try {
        // Consultamos la base de datos
        const cars = await Car.find({});
        res.json(cars);
    } catch (error) {
        console.log(error);
        // Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}

// Se crea un nuevo modelo de carro
exports.newDataCar = async (req, res, next) => {
    // Obtenemos el modelo de carro con los datos del req.body
    const car = new Car(req.body);
    // Por si el servidor se cae y no se puede agregar los datos a la DB
    try {
        // Espera a que se almacenen los datos en la DB
        await car.save();
        res.json({mensaje: 'Registro agregado'});
    } catch (error) {
        console.log(error);
        // Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}

// Se obtiene el modelo de un carro
exports.getDataCar = async (req, res, next) => {
    // Por si el servidor se cae y no se puede agregar los datos a la DB
    try {
        // Consultamos la base de datos
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (error) {
        console.log(error);
        // Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}
// Actualiza el modelo de un carro
exports.updateDataCar = async (req, res, next) => {
    // Por si el servidor se cae y no se puede agregar los datos a la DB
    try {
        // Buscar, actualiza y trae modelo de carro por id
        const car = await Car.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(car);
    } catch (error) {
        console.log(error);
        // Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}

exports.deleteCar = async (req, res, next) => {
    // Por si el servidor se cae y no se puede agregar los datos a la DB
    try {
        await Car.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Eliminado'});
    } catch(error) {
        console.log(error);
        // Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}

