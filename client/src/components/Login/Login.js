import { useState } from "react";
import './styles.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {LoginAction} from '../../redux/actions/LoginAction'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onEmail(event) {
        setEmail(event.target.value)
    }
    function onRegister(event){
        navigate("/register")
    }
    function onPassword(event) {
        setPassword(event.target.value)
    }

    async function onLogin(event) {
        event.preventDefault();
        const loginCredentials = JSON.stringify({email,password})

        const isSuccess = await axios.get('/api/login',{
            params:loginCredentials
        })
        
        if(isSuccess.data.success){
            const fname = isSuccess.data.first_name
            const lname = isSuccess.data.last_name
            const email = isSuccess.data.email
            dispatch(LoginAction({fname,lname,email}))
            navigate("/class")
        }
        else{
            alert('Invalid Credentials...')
        }

        
    }

  return (
      <body className="bdy">
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>

        <form className="formm">
            <h3>
                Classroom Login
            </h3>
            <label className="label">
                Email Address
            </label>
            <input className="input" onChange={onEmail} value = {email} type="email" />
            <label className="label">
                Password
            </label>
            <input className="input" onChange={onPassword} value = {password} type="password" />
            <button className="butn" onClick = {onLogin} type = "submit">
                Log In
            </button>
            <button className="butn" onClick = {onRegister} type = "submit">
                Register
            </button>
        </form>
    </body>
  );
}

export default Login;