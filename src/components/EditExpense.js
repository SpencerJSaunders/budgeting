import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense } from '../actions'
import LinearProgress from '@material-ui/core/LinearProgress';

class EditExpense extends React.Component {


    componentDidMount() {
        
        setTimeout(() => {
            if(!this.props.expense) {
                this.props.history.push('/')
            }
        }, 1500)
    }

    onSubmit = ((formValues) => {
        if(parseFloat(formValues.amount) !== NaN) {
            this.props.editExpense(formValues, this.props.match.params.id, this.props.history)
        }

        else {
            console.log('Enter a valid number')
        }
    })

    renderExpenseItem() {
        if(!this.props.expense) {
            return (
                <div>
                    <LinearProgress />
                </div>
            )
        }
        
        const title = this.props.expense.title
        const type = this.props.expense.type
        const amount = this.props.expense.amount

        return (
            <ExpenseForm initialValues={{title: title, type: type, amount: amount}} onSubmit={this.onSubmit}/>
        )
    }



    render() {

        return (
            <div>
                {this.renderExpenseItem()}
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {editExpense})(EditExpense)