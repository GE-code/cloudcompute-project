import UserPool from "../UserPool";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import React, { useState } from "react";
import './pages_style.css';

function Signup ()  {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        UserPool.signUp(email, password,[],null,(err,data)=>{
            if(err){
                console.error(err);
                return "err.message";
            }
            console.log(data);
        }
        );
    };

    return(
        <div className ="container">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <form onSubmit={onSubmit} className="in">
                <span className ="tittle">Sign up</span>
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
                <button type = "sumbit">Sign up</button>
            </form>
        </div>
    );
};
export default Signup;