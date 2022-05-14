import {Get_Class} from '../constants/Constants'


export const GetClassAction = (params) =>{
    return{
        type:Get_Class,
        payload:params
    }
}