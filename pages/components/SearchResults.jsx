import React, {useEffect, useState}  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { useInView, InView } from 'react-intersection-observer'
import MovieItem from './MovieItem';

export default function SearchResults(props) {
  const [ref, inView, entry] = useInView({
    rootMargin: '0px 100px',
    threshold: 0,
  });

  const submitGetMovies = () => {
    if (props.searchQuery.searchTitle) {
      props.submitGetMovies({
        searchTitle: props.searchQuery.searchTitle,
        page: props.searchQuery.page + 1
      });
    }
  };

  if (props.movieResults) {
    let movieResults = props.movieResults.map( movie => {
      return (
        <MovieItem
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          movie={movie}
          setSavedMovies={props.setSavedMovies}
          savedMovies={props.savedMovies}
        />
      );
    });
    return (
      <div className={css(styles.container)}>
        <h2>Click Films to Save!</h2>
        <div className="movieWrapper" inView={inView}>
          <div ref={ref} className={css(styles.resultsContainer)} >
            {movieResults}
            <EndOfList
              submitGetMovies={submitGetMovies}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const EndOfList = (props) => {
  return (
    <InView as="div" onChange={(inView, entry) => props.submitGetMovies()}>
      <h2>Use onChange to monitor state.</h2>
    </InView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '10px',
    width: '90vw',
    maxHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    height: '50%',
  },
});