const express = require('express')

module.exports = function (server) {
    
    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    
    // Rotas de Livro
    const Livro = require('../api/livro/livroService')
    Livro.register(router, '/livros')

    // Rotas de Leitor
    const Leitor = require('../api/livro/leitorService')
    Leitor.register(router, '/leitores')

    // Rotas de Exemplar
    const Exemplar = require('../api/livro/exemplarService')
    Exemplar.register(router, '/exemplares')
}