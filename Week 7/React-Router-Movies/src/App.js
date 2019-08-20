import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [urlID, setUrlID] = useState(0);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props} />} />
      <Route
        match
        path="/movies/:id"
        render={props => (
          <Movie
            {...props}
            setUrlID={setUrlID}
            urlID={urlID}
            movies={MovieList}
          />
        )}
      />
    </div>
  );
};

export default App;
