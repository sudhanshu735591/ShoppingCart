import { useEffect, useState } from "react";
import "./home.css";
import Button from "./Button/button";
import { useNavigate } from "react-router-dom";

function Home(){

    const [data, setData] = useState();

    const [duplicateData, setDuplicateData] = useState();

    const [inputValue, setInputValue] = useState();

    const [favoriteData, setFavoriteData] = useState(() => {
        const localData = localStorage.getItem("FavData");
        return localData ? JSON.parse(localData) : [];
    });

    const localData = localStorage.getItem("FavData");

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
        setData(sortData);
    }


    function highToLow(){
        const sortData = [...data].sort((a,b)=>b.price-a.price);

        setData(sortData);
    }


    function searchData(){
        const filterData = data.filter((val)=>{
            if(val.title.includes(inputValue)){
                console.log("val is", val);
                return val;
            }
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
        navigate("/login");
    }

    function addToCartHandler(id, title){
        const filterData = data.filter((val)=>val.id===id);
        setFavoriteData((prevFavoriteData) => [...prevFavoriteData, filterData[0]]);
    }

    useEffect(() => {
        if (favoriteData) {
            localStorage.setItem("FavData", JSON.stringify(favoriteData));
        }
    }, [favoriteData]);

    function handleCart(){
        navigate("/cart");
    }


    return(
   
        <div className="parentClass">
           
           {
            localStorage.getItem("Name") &&  localStorage.getItem("Password") && <>
             <div className="buttonBox">
                <Button onClick = {lowToHigh}  text = "Low to high"/>
                <Button onClick={highToLow} text = "High to low"/>
                <Button onClick={handleLogout} text = "Logout"/>
                <Button onClick={handleCart} text = "Go To Cart"/>
            </div>

            <div className="inputBox">
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="Search by product name"/>
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

                            {
                                favoriteData.some((value)=>value.id===val.id)?
                                <Button text = "Go To Cart"/>:
                                <Button onClick={()=>addToCartHandler(val.id, val.title)} text = "Add To Cart"/>
                            }
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




















// ['tshirt', 't_shirt']


// inputData.toLowerCase();


// tArray.include('inputData.toLowerCase());


// t_Shirt


// t_shirt


// ['tshirt', 't_shirt']


// inputData.toLowerCase();


// inputData.toLowerCase().split('-').join('')


// 'TshirT'


// tshirt


// T__SHirt


// t__shirt


// t, shirt


// tshirt


// inputData.toLowerCase().split('-').join('')


// inputData.toLowerCase().split('-').join('')


// G_o_L_D


// g_o_l_d


// g, o, l, d


// gold


// .trim();