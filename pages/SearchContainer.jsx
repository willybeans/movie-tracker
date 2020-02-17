import React, {useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { getMovies } from './dataAccess/movieApi';
import Layout from './components/Layout';

function SearchContainer() {
  const [movieResults, setMovieResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({searchTitle: null, page: 1});
  const [showLoading, setShowLoading] = useState(false)
  const submitGetMovies = (newSearch) => {
    if (newSearch) {
      let titleQueryString = 's=';
      let pageString = '&page=' + newSearch.page;

      getMovies(titleQueryString + newSearch.searchTitle + pageString)
      .then( data => {
        if (searchQuery.searchTitle !== newSearch.searchTitle) {
          setMovieResults([...data.data.Search]);
        } else {
          setMovieResults(prevMovies => [...prevMovies, ...data.data.Search]);
        }
      }).then(setSearchQuery(newSearch))
      .catch(e => e);

    }
  };

  return (
    <div className={css(styles.app)}>
      <Layout>
        <SearchForm
          submitGetMovies={submitGetMovies}
          setShowLoading={setShowLoading}
        />
        <SearchResults
          movieResults={movieResults}
          submitGetMovies={submitGetMovies}
          searchQuery={searchQuery}
          showLoading={showLoading}
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