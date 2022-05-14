import {Update_Login} from '../constants/Constants'

// {email,fname,lname}
let initialState = {}
export const LoginReducer = (state=initialState,action)=>{
    switch(action.type){

        case Update_Login:
            return state=action.payload

        default:
            return state

    }
}