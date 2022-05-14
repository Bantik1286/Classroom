import {LoginReducer} from './reducers/LoginReducer'
import {AssignmentReducer} from './reducers/AssignmentReducer'
import {combineReducers,createStore} from 'redux'

const rootReducer= combineReducers(
{
    LoginReducer,
    AssignmentReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)