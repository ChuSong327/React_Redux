import { combineReducers } from 'redux'
import Projects from '../pages/Projects'
import ModularFlow from '../pages/ModularFlow'

/** The <Module.constants.NAME> will be the State's property
 * example: 
 * state = {
 *  projects: [],
 *  modularFLow: []
 * }
*/
const RootReducer = combineReducers({
    [Projects.constants.NAME]: Projects.reducer,
    [ModularFlow.constants.NAME]: ModularFlow.reducer
})

export default RootReducer