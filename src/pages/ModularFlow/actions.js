import * as type from './actionTypes'

const list = [
    { name: 'Wingman', key: '1'}, 
    { name: 'Orphaned', key: '2'}
]

export function requestModulesList(isFetching) {
    return {
        type: type.REQUEST_MODULES,
        isFetching
    }
}

export function receiveModulesList(isFetching, list) {
    return {
        type: type.RECEIVE_MODULES,
        isFetching,
        list
    }
}

export function fetchModulesList(){
    return function(dispatch) {
        dispatch(requestModulesList(true))
        return dispatch(receiveModulesList(false, list))
    }
}