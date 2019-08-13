/**
 * This file acts as the public API for Modular Flow module.
 */

import * as constants from './constants'
import container from './view/container'
import reducer from './reducer'

const ModularFlow = {
    container: container,
    constants: constants,
    reducer: reducer
}

export default ModularFlow