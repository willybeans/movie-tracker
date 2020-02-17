import React from 'react';
import App from 'next/app';
import MovieContext from './dataAccess/MovieContext';

class MyApp extends App {
  state = {
    savedMovies: [],
  };

  setSavedMovies = movie => {
    if (movie === 'clear') {
      this.setState({savedMovies: []});
    }

    let test = this.state.savedMovies.find( x => {
      return x.imdbID === movie.imdbID;
    });
    if (!test) {
      if (this.state.savedMovies.length) {
        this.setState(prevState => {
          return {savedMovies: [...prevState.savedMovies, movie]};
        });
      } else {
        this.setState({savedMovies: [movie]});
      }
    }
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MovieContext.Provider value={{
        savedMovies: this.state.savedMovies,
        setSavedMovies: this.setSavedMovies,
      }}>
        <Component {...pageProps} />
      </MovieContext.Provider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
