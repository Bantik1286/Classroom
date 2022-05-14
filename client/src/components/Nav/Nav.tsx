import axios from 'axios'
import './Nav.css'
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../redux/store'
import { UpdateClassAction } from '../../redux/actions/UpdateClassAction'

function Nav() {

    const loginDetails = useSelector((state:RootState)=>state.LoginReducer)
    const dispatch = useDispatch()
    async function createClassRoom(){
        
        let classname = prompt("Enter Class Name: ")
        if(classname){
            const email = loginDetails.email
            const details = JSON.stringify({email,classname})
            const res = await axios.post('/api/classroom/create',{details})
            if(res.data.success){
                alert(`classroom is created.Your classroom id is: ${res.data.class_id}`)
                const class_id = res.data.class_id
                const class_name = res.data.class_name
                const created_by = res.data.created_by
                dispatch(UpdateClassAction({class_id,class_name,created_by}))
            }
        }
    }

    return (
        <div className="nav-container">
            <div className="nav-title">
                Classroom
            </div>
            <div className="plus-icon" onClick={()=>{createClassRoom()}}>+</div>
        </div>
    )
}

export default Nav
