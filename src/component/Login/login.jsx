import { useNavigate } from "react-router-dom";
import Button from "../Button/button";
import "./login.css";
import { useState } from "react";

function Login(){

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [password, setPassword] = useState();


    function handleSubmit(){
        console.log(localStorage.getItem("Name")+"----->>>", JSON.stringify(name));
        if(localStorage.getItem("Name")===JSON.stringify(name) && localStorage.getItem("Password")===JSON.stringify(password)){
            navigate("/home");
        }
        else{
            alert("wrong email or password");
            setName("");
            setPassword("");
        }
    }

   return(

    <div className="loginBox">
        <h1>Please Login !! </h1>
        <div className="childBox">
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter Your name"/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter Your password"/>
            <Button onClick = {handleSubmit} text = "Submit"/>

            <p>I don't have account!! <span onClick={()=>navigate("/")} className="spanSignUp">Sign up</span></p>
        </div>
    </div>
   )
}


export default Login;