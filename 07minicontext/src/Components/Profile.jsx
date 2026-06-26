import { useState, useContext } from "react";
import React from "react";
import UserContext from "../Context/UserContext";
function Profile(){

    const {user}=useContext(UserContext)

    if(!user) return <div>please Login!</div>

    return <div>Welcome {user.username}</div>

    return(
        <>
        <h1>Profile</h1> 
        </>
    )
}

export default Profile