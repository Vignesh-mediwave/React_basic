import { useState } from "react";

//components

import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";

function App() {
  const initialMovieList = [
    { id: 1, name: "vikings" },
    { id: 2, name: "Homeland" },
    { id: 3, name: "the Matrix" },
  ];

  const [movieList, setMovieList] = useState(initialMovieList);

  function handleDelete(id) {
    setMovieList((prev) => {
      const items = prev.filter((i) => i.id !== id);
      return items;
    });
  }
  function handleMovieAdd(movieName) {
    const newMovie = {
      name: movieName,
      id: new Date().getTime(),
    };
    const newMovielist = [...movieList];
    newMovielist.push(newMovie);
    setMovieList(newMovielist);
  }

  return (
    <div className="App">
      <AddMovieForm onAdd={handleMovieAdd} />
      <MovieList movies={movieList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
