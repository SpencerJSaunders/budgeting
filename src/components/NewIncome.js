import React from 'react'
import IncomeForm from './IncomeForm'
import { connect } from 'react-redux'
import {addIncome} from '../actions/'

class NewIncome extends React.Component {

    onSubmit = ((formValues) => {
        this.props.addIncome(formValues, this.props.history)
    })


    render() {
        console.log(this.props)
        return (
            <div>
                <IncomeForm initialValues={{type: 'salary'}} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}


export default connect(null, {addIncome})(NewIncome)