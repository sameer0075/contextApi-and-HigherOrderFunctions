import React from "react";
import {MovieContext} from "./MovieContext";
import HOC from "./HOC";

const AddMovie = ()=>{
    const [id,setId] = React.useState();
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState();
    const [movies,setMovies] = React.useContext(MovieContext);

const updateId = (e)=>{
    e.preventDefault();
    setId(e.target.value);
}

const updateName = (e)=>{
    e.preventDefault();
    setName(e.target.value);
}

const updatePrice = (e)=>{
    e.preventDefault();
    setPrice(e.target.value);
}

const addMovie = (e)=>{
    e.preventDefault();

    setMovies(prevMovies => [...prevMovies,{id:id,name:name,price:price}]);
}

    return (

        <form onSubmit={addMovie}>
            <input type="text" placeholder="id" name="id" onChange={updateId} />
            <input type="text" placeholder="name" name="name" onChange={updateName}/>
            <input type="text" placeholder="price" name="price" onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;