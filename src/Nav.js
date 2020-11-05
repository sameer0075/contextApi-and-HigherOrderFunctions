import React from "react";
import {MovieContext} from "./MovieContext";

 const Nav = (props)=>{
    const [movies,setMovies] = React.useContext(MovieContext);
    return (
        <div className="navbar">
            <h2>Movies</h2>
            <h3>List of Movies : {movies.length} </h3>
        </div>
    )
}

export default Nav;