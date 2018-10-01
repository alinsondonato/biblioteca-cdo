const restful = require('node-restful')
const mongoose = restful.mongoose

const periodoSchema = new mongoose.Schema({
    inicio: { type: Date, required: true, default: Date.now },
    fim: { type: Date, required: false }
})

const emprestimoSchema = new mongoose.Schema({
    leitor: { type: mongoose.Schema.Types.ObjectId, ref: 'Leitor' },
    periodo: periodoSchema
})

const exemplarSchema = new mongoose.Schema({
    sequencial: { type: Number, required: true },
    livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro' },
    status: {type: String, required: true, enum: ['disponivel', 'manutencao', 'reservado', 'emprestado'], default: 'disponivel'},
    emprestimos: [emprestimoSchema]
})

module.exports = restful.model('Exemplar', exemplarSchema)