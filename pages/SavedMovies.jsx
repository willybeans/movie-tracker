import React, {useEffect, useState}  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MovieItem from './components/MovieItem';
import Layout from './components/Layout';

export default function SavedMovies(props) {
  console.log('props', props);
  if (props && props.savedMovies) {
    let movieResults = props.savedMovies.map( movie => {
      return (
        <MovieItem
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          poster={movie.Poster}
        />
      );
    });
    return (
      <Layout>
      <div className={css(styles.container)}>
        <h2 className={css(styles.header)}>Your Saved Films</h2>
        <div className={css(styles.resultsContainer)}>
          {movieResults}
        </div>
      </div>
      </Layout>

    );
  } else {
    return (
      <Layout>
        <p>You have no movies saved!!!</p>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: '10px',
    width: '90vw',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '20px',
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
});