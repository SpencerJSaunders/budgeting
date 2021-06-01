import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {

    SelectField,
    TextField

  } from 'redux-form-material-ui'
import Grid from '@material-ui/core/Grid';


class IncomeForm extends React.Component {
   
   onSubmit = formValues => {
       this.props.onSubmit(formValues)
   }




    render() {
        return (
                    <div className='add-edit-container'>
                        <h1 className='page-title'>{this.props.title}</h1>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid className='form-item' item xs={12}>
                                    <Field name="title" component={TextField} hintText='Income name' />
                                </Grid>
                                <Grid className='form-item' item xs={12}>
                                    <Field name="amount" component={TextField} hintText='Amount of $' />
                                </Grid>
                            </Grid>
                                    
                            <button className='submit-button'><span>Submit</span></button>   
                                
                            </form>
                        </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if(!formValues.amount) {
        errors.amount = 'You must enter an amount of $'
    }

    return errors
}

export default reduxForm({
    form: 'incomeForm',
    validate
}
) (IncomeForm)