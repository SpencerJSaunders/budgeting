import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Container from '@material-ui/core/Container'
import BudgetItem from './BudgetItem'
import Grid from '@material-ui/core/Grid';
import '../css/App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SortBy from './SortBy'
import 'react-tabs/style/react-tabs.css';
import BudgetMetrics from './BudgetMetrics'

class BudgetOverview extends React.Component {

    state = {
        expenseSort: 'all'
    }

    expenseSortUpdate = (sortBy) => {
        this.setState({
            expenseSort: sortBy
        })
    }
    
    renderIncome = () => {
        return this.props.income.map(incomeItem => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <BudgetItem buttons={this.incomeActionButtons(incomeItem.id)} key={incomeItem.id} title={incomeItem.title} amount={incomeItem.amount}/>
                </Grid>
            )
        })
    }

    expenseActionButtons = (id) => {
        return (
            <div>
                <Link to={`/expenses/edit/${id}`}>
                    <EditIcon className='edit-button'/>
                </Link>
                <Link to={`/expenses/delete/${id}`}>
                    <DeleteIcon className='trash-button'/>
                </Link>
            </div>
        )
    }

    incomeActionButtons = (id) => {
        return (
            <div>
                <Link to={`/income/edit/${id}`}>
                    <EditIcon className='edit-button' />
                </Link>
                <Link to={`/income/delete/${id}`}>
                    <DeleteIcon className='trash-button'/>
                </Link>
            </div>
        )
    }

    renderExpenses = () => {

        if(this.props.expenses.length > 0) {
            if(this.state.expenseSort === 'all')
                {
                return this.props.expenses.map(expense => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <BudgetItem buttons={this.expenseActionButtons(expense.id)} key={expense.id} title={expense.title} type={expense.type} amount={expense.amount}/>
                        </Grid>
                    )
                })
            }
            else {
                
                const filteredExpenses = this.props.expenses.filter(expense => {
                    return expense.type === this.state.expenseSort
                })

                return filteredExpenses.map(expense => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <BudgetItem buttons={this.expenseActionButtons(expense.id)} key={expense.id} title={expense.title} type={expense.type} amount={expense.amount}/>
                        </Grid>
                    )
                })
               
        }
    }
}
    
    render() {
        return (
            <Container style={{paddingTop: '30px', textAlign: 'center'}}>
                <BudgetMetrics />
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab>Income</Tab>
                        <Tab>Expenses</Tab>
                    </TabList>

                    <TabPanel>
                    <div>

                            <Grid container spacing={3}>
                               
                                    {this.renderIncome()}
                            </Grid>
                            <Link to ='/income/new' style={{ textDecoration: 'none'}}>
                                <Button variant="contained" className='green-button' style={{marginTop: '50px'}}>
                                    Add new Income
                                </Button>
                            </Link>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div>
                        <div style={{textAlign:'center'}}>
                            <SortBy expenseSort={this.state.expenseSort} sortChange={this.expenseSortUpdate} />
                        </div>
                        <Grid container spacing={3}>
                            {this.renderExpenses()}
                        </Grid>
                        <Link to ='/expenses/new' style={{ textDecoration: 'none'}}>
                            <Button variant="contained" className='green-button' style={{marginTop: '50px'}}>
                                Add new Expense
                            </Button>
                        </Link>
                    </div>
                    </TabPanel>
                </Tabs>
            </Container>
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