import { useEffect, useState } from "react";

function Counter(){

    let[count,setCount]=useState(0);
    console.log(`current count is :${count}`);
    

    function inc(){
        setCount((curr)=>{
            return curr+1;
        })
       
    }

    useEffect(function Effect(){
        console.log("this is a side-effect");
    },[count]);
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={inc}>Increase</button>
              </>
    )
}
export default Counter;