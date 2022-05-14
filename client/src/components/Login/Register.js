import { useState } from "react";
import './styles.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {LoginAction} from '../../redux/actions/LoginAction'

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onEmail(event) {
        setEmail(event.target.value)
    }

    function onPassword(event) {
        setPassword(event.target.value)
    }

    function onFname(event) {
        setfname(event.target.value);
    }

    function onLname(event) {
        setlname(event.target.value);
    }

    async function onRegister(event) {
        event.preventDefault();
        const loginCredentials = JSON.stringify({email,fname,lname,password})

        const isSuccess = await axios.get('/api/register',{
            params:loginCredentials
        })
        
        if(isSuccess.data.success){
            navigate("/class")
            dispatch(LoginAction({email,fname,lname}))
        }
        else{
            alert('Invalid Credentials...')
        }
        // let db = new Database();
        // let result_set = await db.find('Users', email);
        // const propertyKeys = Object.keys(result_set);
        // if (propertyKeys.length === 0) {
        //     await db.emplace('Users', email, fname, lname, password);
        //     navigate("/class")

        // } else {
        //     console.warn('This Email Address already exists!');
        // }
    }

  return (
      <body className="bdy">
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className="formm">
            <h3>
                Classroom Register
            </h3>
            <label className="label">
                First Name
            </label>
            <input className="input" onChange={onFname} value = {fname} />
            <label className="label">
                Last Name
            </label>
            <input className="input" onChange={onLname} value = {lname}/>
            <label className="label">
                Email Address
            </label>
            <input className="input" onChange={onEmail} value = {email} type="email" />
            <label className="label">
                Password
            </label>
            <input className="input" onChange={onPassword} value = {password} type="password" />
            <button className="butn" onClick = {onRegister} type = "submit">
                Register
            </button>
        </form>
    </body>
  );
}

export default Register;