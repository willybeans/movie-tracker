import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { useInView, InView } from 'react-intersection-observer'
import MovieItem from './MovieItem';
import LoadingLogo from './LoadingLogo';

export default function SearchResults(props) {
  const [ref, inView, entry] = useInView({
    rootMargin: '0px 100px',
    threshold: 1,
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
    let movieResults = props.movieResults.map(movie => {
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
        <div className="movieWrapper" inView={inView}>
          { props.showLoading ?
            <LoadingLogo />
            :
            <div ref={ref} className={css(styles.resultsContainer)} >
              {movieResults}
              <EndOfList
                submitGetMovies={submitGetMovies}
              />
            </div>
          }
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const EndOfList = (props) => {
  return (
    <InView as="div" onChange={(inView, entry) => props.submitGetMovies()} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #f1f1f1',
    overflow: 'scroll'
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
});