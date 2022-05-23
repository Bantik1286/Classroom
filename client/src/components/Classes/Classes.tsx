import './Classes.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Nav from '../Nav/Nav';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../redux/store'
import {useEffect} from 'react'
import axios from 'axios'
import { GetClassAction } from '../../redux/actions/GetClassAction';

function Classes(){

    const loginDetails = useSelector((state:RootState)=>state.LoginReducer)
    const classes = useSelector((state:RootState)=>state.ClassReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        fetchClasses()

    }, [])

    async function fetchClasses(){
        const email = loginDetails.email
        const e = JSON.stringify({email})
        const res = await axios.get('/api/classroom',{params:e})
        console.log(res)    
        if(res.data.length>0){
            console.log(res.data)
            dispatch(GetClassAction(res.data))
        }
    }

    function Navv(class_id:any,role:any,created_by:any){
        if(role=='ch'){
            navigate('/checker',{state:class_id})
        }else{
            navigate('/searchbar',{state:{class_id,created_by}})
        }
    }

  return (
    <div className="classes">
        <Nav/>

        {
            classes.map((item:any)=><div onClick={()=>Navv(item.class_id,item.role,item.created_by)} className="classroom">
                <div >
                    <div className="class">
                        <span>{item.class_name}</span>
                        <span>{item.created_by}</span>
                    </div>
                </div>
            </div>
            )
        }

{/* 
        <Link to="/searchbar" className="classroom">
        <div >
            <div className="class">
                <span>Software Engineering</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div>
            <div className="class">
                <span>Artifitial Intelligence</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div >
            <div className="class">
                <span>Computer Networks</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div>
            <div className="class">
                <span>Technical Writing</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link> */}
    </div>
  );
}

export default Classes;
