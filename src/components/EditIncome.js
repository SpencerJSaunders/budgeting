import React from 'react'
import IncomeForm from './IncomeForm'
import { connect } from 'react-redux'
import { editIncome } from '../actions'
import LinearProgress from '@material-ui/core/LinearProgress';

class EditIncome extends React.Component {



    onSubmit = ((formValues) => {
            if(parseFloat(formValues.amount)) {
            this.props.editIncome(formValues, this.props.match.params.id, this.props.history)
            }

            else {
                console.log('Enter a valid number')
            }
    })

    renderIncomeItem() {
        if(!this.props.income) {
            return (
                <div>
                    <LinearProgress />
                </div>
            )
        }
        
        const title = this.props.income.title
        const type = this.props.income.type
        const amount = this.props.income.amount

        return (
            <IncomeForm title='Edit Income Item' initialValues={{title: title, amount: amount}} onSubmit={this.onSubmit}/>
        )
    }



    render() {

        return (
            this.renderIncomeItem()
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        income: state.income[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {editIncome})(EditIncome)