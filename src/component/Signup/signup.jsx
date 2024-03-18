import { useState } from "react";
import Button from "../Button/button";

import "./signup.css";
import { useNavigate } from "react-router-dom";


function SignUp(){

    const [name, setName] = useState();

    const [email, setEmail] = useState();

    const [password, setPassWord] = useState();

    const navigate = useNavigate();

   function handleClick(){
    localStorage.setItem("Name" , JSON.stringify(name));
    localStorage.setItem("Email" , JSON.stringify(email));
    localStorage.setItem("Password" , JSON.stringify(password));
   }

   function handleLoginClick(){
    navigate("/login");
   }



    return(
        <div className="loginBox">
        <h1>Please Signup !! </h1>
        <div className="childBox">
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter Your name"/>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your email"/>
            <input onChange={(e)=>setPassWord(e.target.value)} value={password} type="password" placeholder="Enter Your password"/>
            <Button onClick = {handleClick} text = "Submit"/>
            <p >Already account !! <span onClick={handleLoginClick} className="spanLogin">Login</span></p>

        </div>
    </div>
    )
}


export default SignUp;