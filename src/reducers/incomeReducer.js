import {
ADD_INCOME,
EDIT_INCOME,
DELETE_INCOME
} from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_INCOME:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_INCOME:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_INCOME:
            return _.omit(state, action.payload)
        default:
            return state
    }
}