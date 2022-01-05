import React from "react";

function Greet (props){
    const{name,surname}=props
    return( 
     <h1>Hello {name} {surname} </h1>
    )
}

export default Greet