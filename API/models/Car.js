// Importamos mongoose
const mongoose = require('mongoose');
// Creamos el Schema para definir el modelo
const Schema = mongoose.Schema;

// Definimos el Schema para el modelo de carro
const dataCarSchema = new Schema({
    velocityLineal: {
        type: Number,
        trim: true
    }
});

// Exportamos el modelo y le asignamos el nombre
module.exports = mongoose.model('dataCar', dataCarSchema);