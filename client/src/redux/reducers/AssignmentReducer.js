import {Update_Assignments} from '../constants/Constants'

// {assign_id,title,desc,class_id,file_name,file_id,start_date,end_date}
let initialState = []
export const AssignmentReducer = (state=initialState,action)=>{
    switch(action.type){

        case Update_Assignments:
            return state=action.payload

        default:
            return state

    }
}