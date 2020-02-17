import { createContext } from 'react';

const MovieContext = createContext({
  savedMovies: [],
  setSavedMovies: () => {}
});

export default MovieContext;
