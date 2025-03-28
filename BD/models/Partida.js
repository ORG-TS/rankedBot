const mongoose = require('mongoose');

const JugadorEnPartidaSchema = new mongoose.Schema({
    idJugador: { ref: Jugador },
    wins: { type: Number, default: 0 },
    personajes: [ { type: String } ]
})

const PartidaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    jugadores: [JugadorEnPartidaSchema]
});

module.exports = mongoose.model('Partida', PartidaSchema);