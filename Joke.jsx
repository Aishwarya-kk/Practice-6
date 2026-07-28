import { useState } from "react";

function Joke(){
      let[joke,setJoke]=useState({});
    let URL="https://official-joke-api.appspot.com/random_joke";
    let getAPI = async ()=>{
        let response=await fetch(URL);
        let json=await response.json();
        console.log(json);
        setJoke({setup:json.setup,punchline:json.punchline})
    }

  

    return(
        <>
        <h1>API Calls :{joke.setup}</h1>
        <h2>{joke.punchline}</h2>
        <button onClick={getAPI}>Get Jokes</button>
        </>
    )
}
export default Joke;