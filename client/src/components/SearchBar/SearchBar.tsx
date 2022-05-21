import './SearchBar.css'
import Nav from '../Nav/Nav';
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'

import { GetAssignmentsAction } from '../../redux/actions/GetAssignmentsAction';
import {useNavigate,useLocation} from 'react-router-dom'

function SearchBar() {

    useEffect(() => {
        // fetch all the assignments related to this classroom(for now fetching all the assignments of all classroom b/c classroom feature is not yet created)
     
        fetchAssignments()
        fetchAnnouncements()

    }, [])

    // data required: email name classroom created by 
    const [assignTitle , setAssignTitle] = useState('')
    const [assignDesc , setAssignDesc] = useState('')
    const [assignDate, setAssignDate] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [announcement, setAnnouncement] = useState('')
    // {class_id a_id(p key) email(f key) desc}
    // let announcements:any = []
    const [announcements,getAnnouncements] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const loginDetails = useSelector((state:RootState)=>state.LoginReducer)
    const assignmentDetails = useSelector((state:RootState)=>state.AssignmentReducer)
    

    async function fetchAnnouncements(){
        const ann = await axios.get('/api/announcement')
        getAnnouncements(ann.data)
        console.log(announcements)
    }

    async function fetchAssignments(){
        const assignments = await axios.get('/api/assignments')
        console.log('fetching assignments')
        console.log(assignments)
        if(assignments.data){
        
            dispatch(GetAssignmentsAction(assignments.data))
        }
    }

    function handleAssignment(assignment:any){
        navigate('/assignment',{state:assignment})
    }

    async function postAnnouncement(){

        const email = loginDetails.email 
        console.log(loginDetails)
        const announc = JSON.stringify({announcement,email})
        console.log(announc)
        const res = await axios.post('/api/announcement/post',{announc})
        if(res.data){
            getAnnouncements(res.data)
        }

    }

    async function handleSubmit(event:any) {
        // event.preventDefault()
        // const id  = '6f30abc6f10d130a2eed918e497cd495'
        // const name = '3.txt'
        // const filedata = JSON.stringify({id,name})
      
        
        // axios.get('/api/download/file',{
        //     params:filedata
        // })
        // .then(
        //     resp=>{
        //         download(resp.data,name)
        //     }
        // )
        console.log(assignTitle)
        console.log(assignDate)
        console.log(assignDesc)
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        console.log('handle submit triggered')
        formData.append("class_id","fklsdl32")
        formData.append("end_date",assignDate)
        formData.append("title",assignTitle)
        formData.append("desc",assignDesc)

        try {
            const response = await axios({
            method: "post",
            url: "/api/upload/file",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
        console.log(error)
        }
    }

    const handleFileSelect = (event:any) => {
        setSelectedFile(event.target.files[0])
    }

    async function assignChecker(){
        let emm = prompt("Enter Email: ")
        if(emm){
            const class_id = location.state
            const e = JSON.stringify({emm,class_id})
            const res = await axios.put("/api/checker",{e})
            if(res.data.success){
                alert('Operation was successful')
            }
        }
    }

    const ChangeItemDiv = (state:string) =>{
        let itmDiv:any = document.querySelector('.addItems')
        itmDiv.style.display = state
    }

    
    return (
        <div className="main-container">
            <Nav/>
            <div className="search-container">
                <div className="search-bar">
                    <input type="text"   placeholder="Announcement..." id="search" onChange={(e)=>setAnnouncement(e.target.value)}/>
                   
                        <div className="button-container">
                            <button className="button" onClick={()=>{postAnnouncement()}}>Post</button>
                        </div>

                        {/* if user is creator of this classroom then upload button is shown */}
                        <div className="button-container bbt" onClick={()=>ChangeItemDiv("block")}>
                                <button className="button" >Upload</button>
                        </div>

                        <div className="button-container bbt" onClick={()=>assignChecker()}>
                                <button className="button" >Assign Checker</button>
                        </div>
                </div>

            </div>

            <div className="announc-container">
                {
                    announcements.map((item:any)=><div className="announc-card">
                    <div className="announc-details">
                        
                        <div>
                            <span><b>{item.email}</b></span>
                            
                            {/* <span><b> {loginDetails.lname}</b></span> */}
                            <br/>
                            <span >{item.desc}</span>
                        </div>
      
                    </div>
                  
                </div>)
                }

                    {
                        assignmentDetails.map((assignment:any)=>
                        <div className="announc-card" onClick={()=>handleAssignment(assignment)}>
                            <div className="announc-details">
                                <span><b>{assignment.title}</b></span>
                
                                <span >{assignment.desc}</span>
                            </div>
                        </div>
                        )
                    }      
            </div>

            <div className="addItems">
                <div className="cross" onClick={()=>ChangeItemDiv("none")}>
                    X
                </div>            
                <div className="itm-details">
                
                <div className="itm-lbl">
                    <label >Title: </label>
                    <input className="itm-input" value={assignTitle} onChange={(e)=>{setAssignTitle(e.target.value)}}/>
                </div>

                <div className="itm-lbl">
                    <label >Description: </label>
                    <input className="itm-input" value={assignDesc} onChange={(e)=>{setAssignDesc(e.target.value)}}/>
                </div>
                
                <div className="itm-lbl">
                    <label >Deadline: </label>
                    <input className="itm-input" type="date" onChange={(e)=>{setAssignDate(e.target.value)}}/>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileSelect}/>
                    <div className="button-container">
                        {/* <button className="button" >Upload</button> */}
                        <input  type="submit" value="Upload File" />
                    </div>    
                </form>

                {/* <div className="button-container">
                    <button className="button" >Upload</button>
                </div> */}
                
                </div>
            </div>
            

        </div>
    
    )
    
}

export default SearchBar
