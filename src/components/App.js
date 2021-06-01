import React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import BudgetOverview from './BudgetOverview'
import NewIncome from './NewIncome'
import NewExpense from './NewExpense'
import DeleteIncome from './DeleteIncome'
import DeleteExpense from './DeleteExpense'
import EditExpense from './EditExpense'
import EditIncome from './EditIncome'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'
import '../css/App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                        <HashRouter>
                        <Header />
                            <Route path='/' exact component={BudgetOverview} />
                            <Route path='/income/new/' exact component={NewIncome} />
                            <Route path='/income/edit/:id' exact component={EditIncome} />
                            <Route path='/income/delete/:id' exact component={DeleteIncome} />
                            <Route path='/expenses/new/' exact component={NewExpense} />
                            <Route path='/expenses/edit/:id' exact component={EditExpense} />
                            <Route path='/expenses/delete/:id' exact component={DeleteExpense} />
                        </HashRouter>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App