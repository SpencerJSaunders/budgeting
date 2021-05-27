import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    DELETE_EXPENSE
    } from '../actions/types'
    import _ from 'lodash'
    
    export default (state = {}, action) => {
        switch(action.type) {
            case ADD_EXPENSE:
                return {...state, [action.payload.id]: action.payload}
            case EDIT_EXPENSE:
                return {...state, [action.payload.id]: action.payload}
            case DELETE_EXPENSE:
                return _.omit(state, action.payload)
            default:
                return state
        }
    }