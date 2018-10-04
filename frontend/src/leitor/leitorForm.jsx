import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './leitorActions'
import LabelAndInput from '../common/form/labelAndInput'

class LeitorForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='email' component={LabelAndInput} readOnly={readOnly}
                        label='E-mail' cols='12 4' placeholder='Informe o e-mail' />
                    <Field name='celular' component={LabelAndInput} readOnly={readOnly}
                        label='Celular' cols='12 4' placeholder='Informe o celular' />
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

LeitorForm = reduxForm({form: 'leitorForm', destroyOnUnmount: false})(LeitorForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(LeitorForm)