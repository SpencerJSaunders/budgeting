import React from 'react'
import IncomeForm from './IncomeForm'
import { connect } from 'react-redux'
import {addIncome} from '../actions/'

class NewIncome extends React.Component {

    onSubmit = ((formValues) => {
        if(parseFloat(formValues.amount)) {
            this.props.addIncome(formValues, this.props.history)
            }
    
            else {
                console.log('Enter a valid number')
            }    })


    render() {
        console.log(this.props)
        return (
            <div>
                <IncomeForm title={'Add Income Item'} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}


export default connect(null, {addIncome})(NewIncome)