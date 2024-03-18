import { useEffect, useState } from "react";
import "./addToCart.css";
import Button from "../Button/button";

function AddToCart(){

    const [data, setData] = useState();


   useEffect(()=>{
    if(localStorage.getItem("FavData")){
       setData(JSON.parse(localStorage.getItem("FavData")));
    }
   },[]);


   function removeCartHandler(id){
    const filterData = data.filter((val)=>val.id!==id)
    setData(filterData);
    localStorage.setItem("FavData", JSON.stringify(filterData));
   }

    return(
        <div className="cartparentBox">
           {
            data && data.map((val)=>{
                return(
                    <div className="childBox">
                        <img className="addtocartimage" src={val.image} alt="image" />
                        <p>Product Name: {val.title}</p>
                        <p>Price : ₹ {val.price}</p>
                        <p>{val.description}</p>
                        <Button text = "Remove Item" onClick = {()=>removeCartHandler(val.id)}/>
                    </div>
                )
            })
           }
        </div>
    )
}

export default AddToCart;