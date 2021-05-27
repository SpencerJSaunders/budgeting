import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import incomeReducer from './incomeReducer'
import expensesReducer from './expensesReducer'

export default combineReducers({
    income: incomeReducer,
    expenses: expensesReducer,
    form: formReducer,
})