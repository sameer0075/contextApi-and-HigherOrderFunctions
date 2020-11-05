import React from "react";
import HOC from "./HOC"
const Comments = (props)=>{
 
    // const [comments,setComments] = React.useState(0);

    // const handleClick= ()=>{
    //     setComments(comments + 1) 
    // }
    return (

    <button onClick={props.handleClick}>Comment this {props.countNumber}</button>
    )
}

export default HOC(Comments)