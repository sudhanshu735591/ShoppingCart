import { useEffect, useState } from "react";
import "./addToCart.css";

function AddToCart(){

    const [data, setData] = useState();


   useEffect(()=>{
    if(localStorage.getItem("FavData")){
        JSON.parse(localStorage.getItem("FavData")).map((val)=>{
            // console.log("eerff", val);
            setData(val);
            
        })
    }

   },[])

    return(
        <div className="cartparentBox">
           {
            data && data.map((val)=>{
                return(
                    <div className="childBox">
                        <img className="addtocartimage" src={val.image} alt="image" />
                    </div>
                )
                
                // val[index].map((value)=>{
                //   
                // })
            })
           }
        </div>
    )
}

export default AddToCart;