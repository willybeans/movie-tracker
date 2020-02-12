import React, {useEffect, useState}  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function MovieItem(props) {
  const [userInput, setUserInput] = useState(0);

  const handleClick = (event) => {
    let test = props.savedMovies.find( x => {
      return x.imdbID === props.movie.imdbID;
    });
    if (!test) {
      props.setSavedMovies([...props.savedMovies, props.movie]);
    }
  };

  return (
    <div className={css(styles.container)} onClick={handleClick}>
      <img src={props.poster} className={css(styles.image)} />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '5px',
    overflow: 'hidden'
  },
  image: {
    marginTop: '5px',
    height: 'auto',
    width: '200px',
    ':hover': {
      width: '215px',
      boxShadow: '5px 10px #e0e0e0',
    }
  },
});
