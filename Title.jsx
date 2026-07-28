function Title({title,price,a,b,features}){
     console.log(features);
    return(
       
        <>
        
        <h1>{title}</h1>
        <h3>{price}</h3>
           <h3>{a+b}</h3>
           <h2>{features}</h2>
           
        </>
        
    )
}


export default Title;