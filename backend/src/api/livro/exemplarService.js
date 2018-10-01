const Exemplar = require('./exemplar')
const Livro = require('./livro')
const errorHandler = require('../common/errorHandler')

Exemplar.methods(['get', 'post', 'put', 'delete'])
Exemplar.updateOptions({ new: true, runValidators: true })
Exemplar.after('post', errorHandler).after('put', errorHandler)

Exemplar.route('count', (req, res, next) => {
    Exemplar.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

Exemplar.route('summary', (req, res, next) => {
    Exemplar.aggregate([{
        $group: { _id: "$status", qtd: { $sum: 1 } }
    }, {
        $project: { _id: 0, status: "$_id", qtd: 1 }
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            const summary = {disponivel: 0, manutencao: 0, reservado: 0, emprestado: 0}
            result.forEach(e => summary[e.status] = e.qtd)
            res.json(summary || {})
        }
    })
})

Exemplar.route('list', (req, res, next) => {
    Exemplar.aggregate([{
        $project: { _id: 0, livro: 1 }
    }, {
        $group: { _id: "$livro", qtd: { $sum: 1 } }
    }, {
        $project: { _id: 0, livro: "$_id", qtd: 1 }
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            Livro.populate(result, { path: 'livro' },
                (error, result) => {
                    if (error) {
                        res.status(500).json({ errors: [error] })
                    } else {
                        res.json(result || [])
                    }
                })
        }
    })
})

module.exports = Exemplar