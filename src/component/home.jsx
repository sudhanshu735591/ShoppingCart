import { useEffect, useState } from "react";
import "./home.css";
import Button from "./Button/button";
import { useNavigate } from "react-router-dom";

function Home(){

    const [data, setData] = useState();

    const [duplicateData, setDuplicateData] = useState();

    const [inputValue, setInputValue] = useState();

    const [flag, setFlag] = useState(false);


    const navigate = useNavigate();

    const fetchApi = async()=>{
        const apiData = await fetch("https://fakestoreapi.com/products");

        const res = await apiData.json();

        setData(res);
        setDuplicateData(res);
    }


    useEffect(()=>{
        fetchApi();
    },[]);


    function lowToHigh(){
        const sortData = [...data].sort((a,b)=>a.price-b.price);
        console.log("sortData", sortData);
        setData(sortData);
    }


    function highToLow(){
        const sortData = [...data].sort((a,b)=>b.price-a.price);

        setData(sortData);
    }


    function searchData(){
        const filterData = data.filter((val)=>{
            console.log(val.title+"---"+inputValue);
            return val.title===inputValue
        });

        console.log(filterData);
        setData(filterData);
    }


    function loginClick(){
        navigate("/login")
    }


    function signUp(){
        navigate("/signup")
    }


    function handleLogout(){
        // localStorage.removeItem("Name");
        // localStorage.removeItem("Email");
        // localStorage.removeItem("Password");
        setFlag(true);
    }


    return(
   
        <div className="parentClass">
           
           {
            localStorage.getItem("Name") &&  localStorage.getItem("Password") && <>
             <div className="buttonBox">
                <Button onClick = {lowToHigh}  text = "Low to high"/>
                <Button onClick={highToLow} text = "High to low"/>

                <Button onClick={handleLogout} text = "Logout"/>
            </div>

            <div className="inputBox">
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" />
                <button onClick={searchData} type="submit">Submit</button>
            </div>


           {
            data && data.map((val)=>{
                return(
                    <div className="homepage">
                        
                        <img className="image" src={val.image} alt="image" />
                        <div className="productDetails">
                            <p>Product Name: {val.title}</p>
                            <p>Price : ₹ {val.price}</p>
                            <p>{val.description}</p>
                        </div>
                </div>
                )
            })
           }
            </>
           }

           {
            !localStorage.getItem("Name") &&  !localStorage.getItem("Password") &&  <>
                 <div className="authBox">
                    <Button onClick={loginClick} text = "Login"/>
                    <Button onClick={signUp} text = "Sign Up"/>

                </div>
            </>
           }
        </div>
    )
}


export default Home;