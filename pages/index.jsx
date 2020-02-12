import React, {useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import LoadingLogo from './components/LoadingLogo';
import SearchForm from './components/SearchForm';
import SavedMovies from './SavedMovies';
import SearchResults from './components/SearchResults';
import { getMovies } from './components/movieApi';
import Layout from './components/Layout';

function Home() {

  const [movieResults, setMovieResults] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState({searchTitle: null, page: 1});

  const submitGetMovies = (newSearch) => {
    if (newSearch) {
      let nextPage;
      if (searchQuery.searchTitle !== newSearch.searchTitle) {
        setSearchQuery(newSearch);
        setMovieResults([]);
      } else {
        setSearchQuery(newSearch);
      }

      let titleQueryString = 's=';
      let pageString = '&page=' + newSearch.page;

      getMovies(titleQueryString + newSearch.searchTitle + pageString)
      .then( data => {
        setMovieResults([...movieResults, ...data.data.Search]);
      }).catch(e => e);
    }
  };

  return (
    <Layout>
    <div className={css(styles.app)}>
      Welcome to the app

      </div>
    </Layout>

  );
}

export default Home;

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
