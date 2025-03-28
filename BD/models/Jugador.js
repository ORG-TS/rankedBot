const mongoose = require('mongoose');

const PuntosPorTemporadaSchema = new mongoose.Schema({
    temporada: { type: Number, required: true, unique: true },
    puntos: { type: Number, default: 0 },
    victoriasTotales: { type: Number, default: 0 },
    partidasJugadas: { type: Number, default: 0}
})

const JugadorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    puntuaciones: [PuntosPorTemporadaSchema],
    ultimaWin: { ref: Jugador },
    racha: { type: Number, default: 0 },
    mains: [ { type: String } ]
});

module.exports = mongoose.model('Jugador', JugadorSchema);
