
function handle(event){
    event.preventDefault();
    console.log("form was submitted");
    console.log(event);
}




function Form(){
    return(
        <>
       
        <input type="text" placeholder="enter ur name" />
        <button onClick={handle}>Submit</button>

        </>
    )
}
export default Form;