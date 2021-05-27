import {
  ADD_INCOME, 
  EDIT_INCOME, 
  DELETE_INCOME,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE
} from '../actions/types'
import {v4 as uuidv4 } from 'uuid'

export const addIncome = (formValues, history) => async (dispatch) => {
    const form = formValues
    form.id = uuidv4()
    dispatch({type: ADD_INCOME, payload: form})
    history.push('/')
}

export const editIncome = (formValues, id, history) => async (dispatch) => {
  const form = formValues
  form.id = id
  dispatch({type: EDIT_INCOME, payload: formValues})
  history.push('/')
}


export const deleteIncome = (id, history) => async (dispatch) => {

  dispatch({type: DELETE_INCOME, payload: id})
  history.push('/')
}


export const addExpense = (formValues, history) => async (dispatch) => {
  const form = formValues
  form.id = uuidv4()
  dispatch({type: ADD_EXPENSE, payload: form})
  history.push('/')
}

export const editExpense = (formValues, id, history) => async (dispatch) => {
const form = formValues
form.id = id
dispatch({type: EDIT_EXPENSE, payload: formValues})
history.push('/')
}


export const deleteExpense = (id, history) => async (dispatch) => {

dispatch({type: DELETE_EXPENSE, payload: id})
history.push('/')
}