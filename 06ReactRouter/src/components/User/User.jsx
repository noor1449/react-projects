import React from "react";
import { useParams } from "react-router-dom";

function User(){
const {id}=useParams()

    return(
        <div className="text-center justify-center ml-150 mr-200 bg-gray-600 text-white text-3xl p-3">User:       {id}</div>
    )
}
export default User;