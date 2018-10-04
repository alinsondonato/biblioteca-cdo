import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './livroActions'
import LabelAndInput from '../common/form/labelAndInput'

class LivroForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='titulo' component={LabelAndInput} readOnly={readOnly}
                        label='Título' cols='12 4' placeholder='Informe o título' />
                    <Field name='autor' component={LabelAndInput} readOnly={readOnly}
                        label='Autor' cols='12 4' placeholder='Informe o autor' />
                    <Field name='isbn' component={LabelAndInput} readOnly={readOnly}
                        label='ISBN' cols='12 4' placeholder='Informe o ISBN' />
                    <Field name='editora' component={LabelAndInput} readOnly={readOnly}
                        label='Editora' cols='12 4' placeholder='Informe a editora' />
                    <Field name='ano' component={LabelAndInput} readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />
                    <Field name='genero' component={LabelAndInput} readOnly={readOnly}
                        label='Gênero' cols='12 4' placeholder='Informe o gênero' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

LivroForm = reduxForm({form: 'livroForm', destroyOnUnmount: false})(LivroForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(LivroForm)