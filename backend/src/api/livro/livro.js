const restful = require('node-restful')
const mongoose = restful.mongoose

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true, index: true, uppercase: true },
    autor: { type: String, required: true, uppercase: true },
    isbn: { type: String, required: true },
    editora: { type: String, required: true, uppercase: true },
    genero: {
        type: String, required: false, uppercase: true,
        enum: ['CASAMENTO', 'ORACAO', 'JOVENS']
    },
    ano: { type: Number, min: 1970, max: 2100, required: true },
})

module.exports = restful.model('Livro', livroSchema)