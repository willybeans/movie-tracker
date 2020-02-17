import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MovieItem from './components/MovieItem';
import Layout from './components/Layout';
import MovieContext from './dataAccess/MovieContext';

const SavedMovies = () => {
  const { savedMovies, setSavedMovies } = useContext(MovieContext);

  const clearMovies = () => {
    setSavedMovies('clear');
  };

  if (savedMovies && savedMovies.length > 0) {
    let movieResults = savedMovies.map(movie => {
      return (
        <MovieItem
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          poster={movie.Poster}
          key={movie.Title}
        />
      );
    });
    return (
      <Layout>
        <div className={css(styles.container)}>
        <h2 className={css(styles.header)}>Your Saved Films</h2>
        <button onClick={clearMovies} className={css(styles.clearButton)}>Clear All</button>
          <div className={css(styles.innerContainer)}>
            <div className={css(styles.resultsContainer)}>
              {movieResults}
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={css(styles.container)}>
          <div className={css(styles.innerContainer)}>
            <h2 className={css(styles.header)}>You Have No Saved Movies!</h2>
          </div>
        </div>
      </Layout>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '10px',
    justifyContent: 'center',
    textAlign: 'center'
  },
  clearButton: {
    height: '50px',
    width: '100px',
    alignSelf: "center",
    marginTop: '10px',
    border: '2px solid black'
  },
  header: {
    fontSize: '20px',
    textAlign: 'center'
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center'
  },
  innerContainer: {
    maxHeight: '80vh',
    overflow: 'auto',
    padding: '20px',
    border: '1px solid #f1f1f1',
    width: '100%',
  },
});

export default SavedMovies;
