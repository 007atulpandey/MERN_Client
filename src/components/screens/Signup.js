import React,{useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Signup =()=>{

    const [name,setname]=useState('');
    const [password,setpass] = useState('')
    const [email,setmail] = useState('')
    const postData= ()=>{
        axios.post("http://localhost:5000/signup",
        {
            headers:{
                "Content-type":"application/json"
            },
            data:{
                name:"Atul",
                password:"Atul",
                email:"Atul@gmail.com"
            }
        })
        .then(data=>{
            console.log("data get to destination")
        })
    }
    return (
       
        <div className="mycard"> 
            <div className="input-field card auth-card">
                <h2
                style={{
                    "font-family": "'Great Vibes', cursive",
                    "font-weight":"bold"
                }}
                >
                    Share App 
                </h2>
                <input 
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>{
                        setmail(e.target.value)
                    }}
                />
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>{setname(e.target.value)}}
                />
                <input 
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>{
                        setpass(e.target.value)
                    }}
                />
                <p >
                    if you already have an account 
                    <Link to ="/login">
                    <p style={{"color":"blue"}}>click</p>
                    </Link>
                </p> 
                <button className="btn waves-effect waves-light "
                onClick={()=>postData()}
                >
                SignUp
                </button >
            
            </div>
        </div>
    );
}

export default Signup