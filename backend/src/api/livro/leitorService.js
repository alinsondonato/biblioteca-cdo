const Leitor = require('./leitor')
const errorHandler = require('../common/errorHandler')

Leitor.methods(['get', 'post', 'put', 'delete'])
Leitor.updateOptions({new: true, runValidators: true})
Leitor.after('post', errorHandler).after('put', errorHandler)

module.exports = Leitor