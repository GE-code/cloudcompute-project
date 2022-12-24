import UserPool from "../UserPool";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import React, { useState } from "react";
import './pages_style.css';


function Signin ()  {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDeatils = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDeatils,{
            onSucess:(data) => {
                console.log("onSuccess: ", data);
            },
            onFailure: (err)=>{
                console.error("onFailure :", err);
            },
            newPasswordRequired: (data) =>{
                console.log("newPasswerdRequired: ", data);
            },

        });
    };

    return(
        <div className ="container">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <form onSubmit={onSubmit} className="in">
                <span className ="tittle">Sign in</span>
                <div className = "input-field">
                    <input value = {email} onChange={(event) =>setEmail(event.target.value)}
                    type = "text" placeholder="Enter your email" required></input>
                    <i className="uil uil-envelope-alt"></i>
                </div>
                <div className = "input-field">
                    <input value= {password} onChange={(event) => setPassword(event.target.value)}
                    type ="password" placeholder="Enter your password" required></input>
                    <i className="uil uil-lock"></i>
                </div>
                <button type = "sumbit">Sign in</button>
            </form>
        </div>
    );
};

export default Signin;

