/**
 * This file acts as the public API for Projects module.
 */
import * as constants from './constants'
import container from './view/container'
import reducer from './reducer'

const Projects = {
    container: container,
    constants: constants,
    reducer: reducer
}

export default Projects 