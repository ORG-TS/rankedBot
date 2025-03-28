const mongoose = require('mongoose');

const PuntosPorTemporadaSchema = new mongoose.Schema({
    temporada: { type: Number, required: true, unique: true },
    puntos: { type: Number, default: 0 }
})

const JugadorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    puntuaciones: [PuntosPorTemporadaSchema],
    ultimaWin: { ref: Jugador },
    mains: [ { type: String } ]
});

module.exports = mongoose.model('Jugador', JugadorSchema);
