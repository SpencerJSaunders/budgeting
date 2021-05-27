import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle,
    DatePicker
  } from 'redux-form-material-ui'

class ExpenseForm extends React.Component {
   
   onSubmit = formValues => {
       this.props.onSubmit(formValues)
   }


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={TextField} hintText='Expense name' />
                    <Field name="amount" component={TextField} hintText='Amount of $' />
                    <Field name="type" component={SelectField} hintText='Expense type'>
                        <MenuItem value="grocery" primaryText="Groceries"/>
                        <MenuItem value="insurance" primaryText="Insurance"/>
                    </Field>
                    <button className='ui button primary'>Submit</button>
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
    form: 'expenseForm',
    validate
}
) (ExpenseForm)