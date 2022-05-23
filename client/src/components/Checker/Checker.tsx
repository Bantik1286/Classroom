import CheckerNav from './CheckerNav'
import {useEffect,useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

export default function Checker() {

    const [assignments,setAssignments] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchAssignments()
    }, [])

    const location = useLocation()
    async function fetchAssignments(){
        const class_id = location.state
        const id = JSON.stringify({class_id})
        console.log(id)
        const res = await axios.get('/api/assignments/fetchall',{params:id})
        setAssignments(res.data)
    }

    const handleAssignments=(assign_id:any,tot_marks:any)=>{
        const class_id = location.state
        navigate('/submissions',{state:{assign_id,class_id,tot_marks}})
    }

    return (
        <div>
            <CheckerNav/>
            <div className="announc-container">
            {
                assignments.map((assignment:any)=>
                <div className="announc-card" >
                    <div className="announc-details" onClick={()=>handleAssignments(assignment.assign_id,assignment.tot_marks)}>
                        <span><b>{assignment.title}</b></span>
                        <br/>
                        <span >{assignment.desc}</span>
                    </div>
                </div>)
            }
            </div>

        </div>
    )
}
