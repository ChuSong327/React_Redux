import { combineReducers } from 'redux'
import Projects from '../pages/Projects'

const RootReducer = combineReducers({
    [Projects.constants.NAME]: Projects.reducer
})

export default RootReducer