function onclick(){
    return(
 <p>Hello u have done onclick event</p>
    )
 
}


function Button(){
    return(
        <>
        <button onClick={onclick}>Click me</button>
        </>
    )
}

export default Button;
