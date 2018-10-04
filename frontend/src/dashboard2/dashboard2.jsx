import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { disponivel: 0, manutencao: 0, reservado: 0, emprestado: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/exemplares/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { emprestado, reservado, disponivel, manutencao } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 6' color='green' icon='book'
                            value={disponivel} text='Exemplares disponíveis' />
                        <ValueBox cols='12 6' color='red' icon='book'
                            value={emprestado} text='Exemplares emprestados' />
                            <ValueBox cols='12 6' color='yellow' icon='book'
                            value={reservado} text='Exemplares reservados' />
                        <ValueBox cols='12 6' color='gray' icon='book'
                            value={manutencao} text='Exemplares em manutenção' />
                        <ValueBox cols='12' color='blue' icon='book'
                            value={reservado + disponivel + manutencao + emprestado} text='Total de exemplares' />
                    </Row>
                </Content>
            </div>
        )
    }
}