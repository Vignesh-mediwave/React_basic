import {useState} from "react";

const AddMovieForm=(props)=> {
    const [newMovieName, setNewMovieName] = useState("");
  
    function handleInputChange(e) {
      setNewMovieName(e.target.value);
    }
    function handleFormSubmit(e) {
      e.preventDefault();
      props.onAdd(newMovieName);
      setNewMovieName("");
    }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newMovieName} onChange={handleInputChange} />
        <input type="submit" value="Add a movie" />
      </form>
    );
  }

  export default AddMovieForm