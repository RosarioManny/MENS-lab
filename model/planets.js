const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: String,
    position: Number,
    state: String,
})

const Planet = mongoose.model("Planets", planetSchema)

module.exports = Planet