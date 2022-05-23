import CheckerNav from '../Checker/CheckerNav'
import {useLocation,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Submissions() {
    
    const location:any = useLocation()
    const [submissions,setSubmissions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchSubmissions()

    }, [])
    
    async function fetchSubmissions(){
        // const class_id = location.state.class_id
        const assign_id = location.state.assign_id
        const details = JSON.stringify({assign_id})
        const res = await axios.get('/api/submissions',{params:details})
        if(res.data.length>0){
            setSubmissions(res.data)
        }
    }

    function submissionDetails(submission:any){
        const tot_marks = location.state.tot_marks
        submission = {...submission,tot_marks}
        navigate('/submissionDetails',{state:submission})    
    }

    return (
        <div>
            <CheckerNav/>
            <div className="announc-container">
                {
                    submissions.map((submission:any)=>
                    <div className="announc-card" onClick={()=>{submissionDetails(submission)}}>
                        <div className="announc-details">
                            <span><b>{submission.user_id}</b></span>
                            <br/>
                            <span >{submission.sub_date}</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
