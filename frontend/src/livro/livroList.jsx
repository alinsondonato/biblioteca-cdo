import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './livroActions'

class LivroList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(lv => (
            <tr key={lv._id}>
                <td>{lv.titulo}</td>
                <td>{lv.autor}</td>
                <td>{lv.isbn}</td>
                <td>{lv.editora}</td>
                <td>{lv.genero}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(lv)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(lv)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }
        
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>ISBN</th>
                            <th>Editora</th>
                            <th>Gênero</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
            )
        }
    }
        
const mapStateToProps = state => ({list: state.livro.list })
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LivroList)