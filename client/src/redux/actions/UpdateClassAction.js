import {Update_Class} from '../constants/Constants'


export const UpdateClassAction = (params) =>{
    return{
        type:Update_Class,
        payload:params
    }
}