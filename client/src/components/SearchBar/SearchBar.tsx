import './SearchBar.css'
import Nav from '../Nav/Nav';
import {useState} from 'react'
import axios from 'axios'
import download from 'js-file-download'

function SearchBar() {
    // data required: email name classroom created by 
    const [assignTitle , setAssignTitle] = useState('')
    const [assignDesc , setAssignDesc] = useState('')
    const [assignDate, setAssignDate] = useState('')
    const [selectedFile, setSelectedFile] = useState('');

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

    const ChangeItemDiv = (state:string) =>{
        let itmDiv:any = document.querySelector('.addItems')
        itmDiv.style.display = state
    }
    
    return (
        <div className="main-container">
            <Nav/>
            <div className="search-container">
                <div className="search-bar">
                    <input type="text"   placeholder="Announcement..." id="search"/>
                   
                        <div className="button-container">
                            <button className="button" >Post</button>
                        </div>

                        {/* if user is creator of this classroom then upload button is shown */}
                        <div className="button-container" onClick={()=>ChangeItemDiv("block")}>
                                <button className="button" >Upload</button>
                        </div>
                </div>

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
