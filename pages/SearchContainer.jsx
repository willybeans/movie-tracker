import React, {useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { getMovies } from './dataAccess/movieApi';
import Layout from './components/Layout';

function SearchContainer() {
  const [movieResults, setMovieResults] = useState([]);
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
    <div className={css(styles.app)}>
      <Layout>
        <SearchForm
          submitGetMovies={submitGetMovies}
          movieResults={movieResults}
          setMovieResults={setMovieResults}
        />
        <SearchResults
          movieResults={movieResults}
          submitGetMovies={submitGetMovies}
          searchQuery={searchQuery}
        />
      </Layout>
    </div>
  );
}

export default SearchContainer;

const styles = StyleSheet.create({
  app: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  movieOuterWrap: {
    display: 'flex',
    flexDirection: 'row',
    flex: 2
  }
});