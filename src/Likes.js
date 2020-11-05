import React from "react";
import HOC from "./HOC"
const Likes = (props)=>{
 
    // const [likes,setLikes] = React.useState(0);

    // const handleClick= ()=>{
    //     setLikes(likes + 1) 
    // }
    return (

    <button onClick={props.handleClick}>Like this {props.countNumber}</button>
    )
}

export default HOC(Likes)