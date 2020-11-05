import './App.css';
import MovieList from "./MovieList";
import Nav from "./Nav"
import AddMovie from "./AddMovie";
import {MovieProvider} from "./MovieContext";

import Likes from "./Likes";
import Comments from "./Comments";
function App() {
  return (
    <MovieProvider>
    <div className="App">
      {/* <Nav />
      <AddMovie />
      <MovieList /> */}
      <Likes />
      {/* <Comments /> */}
    </div>
    </MovieProvider>
  );
}

export default App;
