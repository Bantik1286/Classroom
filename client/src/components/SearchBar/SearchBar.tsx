import './SearchBar.css'
import Nav from '../Nav/Nav';
import {useState} from 'react'
import axios from 'axios'

function SearchBar() {
    // data required: email name classroom created by 
    const [assignTitle , setAssignTitle] = useState('')
    const [assignDesc , setAssignDesc] = useState('')

    const [selectedFile, setSelectedFile] = useState('');

    async function handleSubmit(event:any) {
        // event.preventDefault()
        // const id  = '72795f0a64dfb5f687aba26577ec64fd'
        // const name = '19k-1365 lab#08.pdf'
        // const filedata = JSON.stringify({id,name})
        // const isSuccess = await axios.get('/api/download/file',{
        //     params:filedata
        // })

        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        console.log('handle submit triggered')
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
