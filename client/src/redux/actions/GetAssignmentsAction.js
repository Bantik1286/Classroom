import {Update_Assignments} from '../constants/Constants'


export const GetAssignmentsAction = (params) =>{
    return{
        type:Update_Assignments,
        payload:params
    }
}