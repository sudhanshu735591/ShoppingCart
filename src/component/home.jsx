import { useEffect, useState } from "react";
import "./home.css";
import Button from "./Button/button";

function Home(){

    const [data, setData] = useState();

    const [duplicateData, setDuplicateData] = useState();

    const [inputValue, setInputValue] = useState();

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


    return(
        <div className="parentClass">
            <div className="buttonBox">
                <Button onClick = {lowToHigh}  text = "Low to high"/>
                <Button onClick={highToLow} text = "High to low"/>
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
        </div>
    )
}


export default Home;