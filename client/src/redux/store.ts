import {LoginReducer} from './reducers/LoginReducer'
import {AssignmentReducer} from './reducers/AssignmentReducer'
import {ClassReducer} from './reducers/ClassReducer'
import {combineReducers,createStore} from 'redux'

const rootReducer= combineReducers(
{
    LoginReducer,
    AssignmentReducer,
    ClassReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)