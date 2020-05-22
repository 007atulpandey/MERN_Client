import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
const Login =()=>{
    return (

        <div className="mycard"> 
            <div className="input-field card auth-card">
                <h2
                style={{
                    "font-family": "'Great Vibes', cursive",
                    "font-weight":"bold"
                }}
                >
                    SHAre App 
                </h2>
                <input 
                    type="text"
                    placeholder="email"
                />
                <input 
                    type="text"
                    placeholder="password"
                />
                 <p >
                    if you don't have an account 
                    <Link to ="/signup">
                    <p style={{"color":"blue"}}>Signup</p>
                    </Link>
                </p> 
                <button className="btn waves-effect waves-light ">
                Login
                </button >
            
            </div>
        </div>
    );
}

export default Login