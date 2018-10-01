const Livro = require('./livro')
const errorHandler = require('../common/errorHandler')

Livro.methods(['get', 'post', 'put', 'delete'])
Livro.updateOptions({new: true, runValidators: true})
Livro.after('post', errorHandler).after('put', errorHandler)

module.exports = Livro