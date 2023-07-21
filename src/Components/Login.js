import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
    const collectData = async () => {
        console.log('Data:', email, password);
       let result = await fetch('http://localhost:5000/login',{
        method: 'post',
        body: JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
       });
       result = await result.json();
       console.log('resultLogin',result)
       if(result.name){
         localStorage.setItem("user",JSON.stringify(result));
         navigate('/')
       }else{
        alert("Please enter correct credentials")
       }
    };
    return (
<div class="center-container">
        <h1>Login</h1>
        <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" /><br/>
        <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" /><br/>
        <button className="app-btn" type="button" onClick={collectData}>Submit</button>
    </div>
    )
}

export default Login;