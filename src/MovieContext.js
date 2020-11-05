import React from "react";

export const MovieContext = React.createContext();

export const MovieProvider = (props)=>{
    const [movies,setMovies] = React.useState([
        {
            id:1,
            name:"Harry Potter",
            price:200
        },
        {
            id:2, 
            name:"Mission Impossible",
            price:300
        },
        {
            id:3,
            name:"Harry Potter",
            price:400
        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}