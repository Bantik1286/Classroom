import Nav from '../Nav/Nav';
import './Assignment.css';
import {useLocation} from 'react-router-dom';
import axios from 'axios'
import {useState,useEffect} from 'react'
import { RootState } from '../../redux/store'
import {useSelector} from 'react-redux'
import download from 'js-file-download'

// {assign_id,title,desc,class_id,file_name,file_id,start_date,end_date}
// submissions
// id assign_id(f_key) user_id(f_key) file_name file_id sub_date
function Assignment() {
    const location:any = useLocation()
    console.log(location.state)
    
    const [selectedFile, setSelectedFile] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submittedFileName, setSubmittedFileName] = useState('')
    const loginDetails = useSelector((state:RootState)=>state.LoginReducer)
    
    useEffect(() => {
        //fetching submission details of this user if the assignment is submitted
        fetchSubmission()

    }, [])

    async function fetchSubmission(){

        const e = loginDetails.email
        const assign_id = location.state.assign_id
        console.log(e)
        const email = JSON.stringify({e,assign_id})
        console.log('fetching submission')
        const res = await axios.get('/api/getSubmission',{
            params:email
        })
        console.log(res)
        if(res.data.success){
            // means users has submission
            setIsSubmitted(true)
            setSubmittedFileName(res.data.file_name)
        }
    }
    
    async function downloadFile(){
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
    async function handleSubmit(event:any) {
        
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        console.log('handle submit triggered')
        formData.append("user_id",loginDetails.email)
        formData.append("assign_id",location.state.assign_id)

        try {
            const response = await axios({
            method: "post",
            url: "/api/upload/assignment",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
            if(response.data.success){
                alert("Assignment Submitted Successfully...")
            }
        } catch(error) {
        console.log(error)
        }
    }

    const handleFileSelect = (event:any) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <div className="main-container">
            <Nav/>
            <div className="main">
                
                <div className="assign-details-main">
                    <div className="assign-details">
                        <span className="title">{location.state.title}</span>
                        <span>[username]</span>
                        <span className="deadline">Due: {location.state.end_date}</span>
                    </div>
                    <div className="assign-details-file">
                        <span className="desc">{location.state.desc}</span>
                        <span className="file" onClick={()=>downloadFile()}>{location.state.file_name} [click to download]</span>
                    </div>
                </div>

                <div className="submission-details">
                    <div className="title s">Your Work</div>
                    {
                        isSubmitted?
                        <div>
                            <span>{submittedFileName}</span>
                            <span>submitted</span>
                        </div>:
                            <form onSubmit={handleSubmit} className="form">
                            <input type="file" onChange={handleFileSelect}/>
                            <div className="button-container">
                                {/* <button className="button" >Upload</button> */}
                                <input  type="submit" value="Submit" className="button p"/>
                            </div>    
                        </form>
                    }
                    

                </div>
                

            </div>
        </div>
    )
}

export default Assignment
