import React from 'react'
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';

class BudgetMetrics extends React.Component {

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    renderBalance = () => {

        let expensesTotal = 0, incomeTotal = 0

        this.props.expenses.forEach(expense => {
            expensesTotal += parseFloat(expense.amount)
        })

        this.props.income.forEach(income => {
            incomeTotal += parseFloat(income.amount)
        })

        const date = new Date()
        const month = date.toLocaleString('default', { month: 'long' });

        const overallBudgetBalance = incomeTotal - expensesTotal

        //income - expenses
        //if value > 0 then you have more money you can spend
        //if value == balanced budget
        //if value < 0 then you are spending more than you can afford

        if(overallBudgetBalance > 0) {
            return (
                <div>
                    <h1 style={{color: '#8EC738'}}>${this.numberWithCommas(overallBudgetBalance.toFixed(2))}</h1>
                    <h4 style={{marginBottom: '20px'}}>is left to spend for the month of {month}.</h4>
                    <LinearProgress variant="determinate" value={(expensesTotal/incomeTotal)*100} />
                </div>
            )
        }
        else if(overallBudgetBalance === 0) {
            return (
                <div>
                    <h3 style={{marginBottom: '20px'}} >Congrats! You have a balanced budget for the month of {month}!</h3>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            )
        }
        else if(overallBudgetBalance < 0) {
            return(
                <div>
                    <h1><span style={{color:"red"}}>${this.numberWithCommas(Math.abs(overallBudgetBalance).toFixed(2))}</span> over budget!</h1>
                    <h3>Reduce your spending or increase your income sources.</h3>
                </div>
            )
        }
    }

    render() {
        const date = new Date()
        const month = date.toLocaleString('default', { month: 'long' });
        return (
            <div style={{marginBottom: '30px'}}>
                {
                    this.props.expenses.length || this.props.income.length
                    ?
                    this.renderBalance()
                    :
                    <div>
                        <h1 style={{marginBottom: '15px'}}>Month of {month}</h1>
                        <h3>Once you enter some information about your monthly expenses and monthly income, you can see if your budget is balanced.</h3>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        expenses: Object.values(state.expenses),
        income: Object.values(state.income)
    }
}


export default connect(mapStateToProps, {})(BudgetMetrics)