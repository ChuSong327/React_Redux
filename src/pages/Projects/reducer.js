import * as type from './actionTypes'

const initialState = {
    list: [],
    isFetching: true
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case type.REQUEST_PROJECTS: 
            Object.assign({}, state, {isFetching: action.isFetching})
        case type.RECEIVE_PROJECTS: 
            return Object.assign({}, state, {list: action.list, isFetching: action.isFetching})
        default: 
            return state
    }
}

export default reducer