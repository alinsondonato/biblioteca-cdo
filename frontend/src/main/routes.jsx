import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard2/dashboard2'
import Livro from '../livro/livro'
import Leitor from '../leitor/leitor'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/livros' component={Livro} />
        <Route path='/leitores' component={Leitor} />
        <Redirect from='*' to='/' />
    </Router>
)