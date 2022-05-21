import CheckerNav from '../Checker/CheckerNav'
import {useLocation} from 'react-router-dom'
import './SubmissionDetails.css'
import download from 'js-file-download'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store'

export default function SubmissionDetails() {
    
    const location:any = useLocation()
    const loginDetails = useSelector((state:RootState)=>state.LoginReducer)
    async function downloadSubmission(){
        const id = location.state.file_id
        const name = location.state.file_name
        const filedata=JSON.stringify({id,name})

         axios.get('/api/download/file',{
            params:filedata
        })
        .then(
            resp=>{
                download(resp.data,name)
            }
        )
    }

    async function gradeSubmission(){
        let obt_marks = prompt('Enter obtained marks: ')
        const sub_id = location.state.id
        const user_id = loginDetails.email
        // obt_marks = parseInt(obt_marks)
        const details = JSON.stringify({sub_id,user_id,obt_marks})
        const res = await axios.post('/api/gradeSubmission',{details})
        if(res.data.success){
            alert('Assignment Graded')
        }
    }

    return (
        <div>
            <CheckerNav/>
            <div className="main-div">
                <div className="sub-details">
                    <span>Id: <b>{location.state.id}</b></span>  
                    <span>File Name: <b>{location.state.file_name}</b></span>
                    <span>Submission Date: <b>{location.state.sub_date}</b></span>
                </div>
                <div className="bttn-container">
                    <button className="button bnn" onClick={()=>downloadSubmission()}>Download</button>
                    <button className="button bnn" onClick={()=>gradeSubmission()}>Grade</button>
                </div>
            </div>
        </div>
    )
}
