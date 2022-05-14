import {Update_Class} from '../constants/Constants'
import {Get_Class} from '../constants/Constants'

//[{class_id,class_name,created_by},{class_id,class_name,created_by}]
let initialState = []
export const ClassReducer = (state=initialState,action)=>{
    switch(action.type){

        case Update_Class:
            return [...initialState,action.payload]

        case Get_Class:
            return initialState = action.payload

        default:
            return state

    }
}