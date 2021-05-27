import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense} from '../actions/'

class NewExpense extends React.Component {

    onSubmit = ((formValues) => {
        this.props.addExpense(formValues, this.props.history)
    })


    render() {
        
        return (
            <div>
                <ExpenseForm initialValues={{type: 'grocery'}} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}


export default connect(null, {addExpense})(NewExpense)