import { useState, useContext } from "react";
import React from "react";
import UserContext from "../Context/UserContext";
function Login(){
    const [username,SetUsername]=useState('')
    const [password,SetPassword]=useState('')

    const {SetUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        SetUser({username,password})
    }

    return(
        <div>
        <h1>Login</h1> 
        
        <input type="text" 
        value={username}
        onChange={(e)=>SetUsername(e.target.value)}
        placeholder="Username"/>
       {" "}
        <input type="text" 
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
        placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default Login