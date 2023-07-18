import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const collectData = async () => {
        console.log('Data:', name, email, password);
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const result = await response.json();
                navigate('/logout')
                console.log('result', result);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h1>Heloo this is Signup page</h1>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name" />
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" />
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" />
            <button className="app-btn" type="button" onClick={collectData}>Submit</button>
        </div>
    )
}

export default SignUp;