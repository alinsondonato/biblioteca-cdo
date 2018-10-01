import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { emprestado, reservado, disponivel, manutencao } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)