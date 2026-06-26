import { useContext } from "react";
import React from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    // If there is no user, stop here and show the login prompt
    if (!user) return <div>please Login!</div>;

    // If there IS a user, show the profile details
    return (
        <>
            <h1>Profile</h1>
            <div>Welcome {user.username}</div>
        </>
    );
}

export default Profile;