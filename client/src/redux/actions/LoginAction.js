import {Update_Login} from '../constants/Constants'


export const LoginAction = (params) =>{
    return{
        type:Update_Login,
        payload:params
    }
}