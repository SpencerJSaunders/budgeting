import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

class BudgetOverview extends React.Component {
    
    renderIncome = () => {
        return this.props.income.map(incomeItem => {
            return (
                <div>
                    <span>{incomeItem.title}</span>
                    <span>{incomeItem.type}</span>
                    <span>{incomeItem.amount}</span>
                    <Link to={`/income/edit/${incomeItem.id}`}>
                        <EditIcon  />
                    </Link>
                    <Link to={`/income/delete/${incomeItem.id}`}>
                       <DeleteIcon color='error'/>
                    </Link>
                </div>
            )
        })
    }

    renderExpenses = () => {
        return this.props.expenses.map(expense => {
            return (
                <div>
                    <span>{expense.title}</span>
                    <span>{expense.type}</span>
                    <span>{expense.amount}</span>
                    <Link to={`/expenses/edit/${expense.id}`}>
                        <EditIcon />
                    </Link>
                    <Link to={`/expenses/delete/${expense.id}`}>
                        <DeleteIcon />
                    </Link>
                </div>
            )
        })
    }
    
    render() {
        console.log(this.props.income)
        return (
            <div>
                <div>
                    <h1>Income Info:</h1>
                    {this.renderIncome()}
                    <Link to ='/income/new'>
                        <Button variant="contained" color="primary">
                            Add new Income
                        </Button>
                    </Link>
                </div>
                <div>
                    <h1>Expenses Info:</h1>
                    {this.renderExpenses()}
                    <Link to ='/expenses/new'>
                        <Button variant="contained" color="primary">
                            Add new Expense
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        income: Object.values(state.income),
        expenses: Object.values(state.expenses)
    }
}

export default connect(mapStateToProps)(BudgetOverview)