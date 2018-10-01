const restful = require('node-restful')
const mongoose = restful.mongoose

const leitorSchema = new mongoose.Schema({
    nome: { type: String, required: true, index: true, uppercase: true },
    email: { type: String, required: true },
    celular: { type: String, required: false }
})

module.exports = restful.model('Leitor', leitorSchema)