import { useContext }  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MovieContext from '../dataAccess/MovieContext';

const MovieItem = (props) => {
  const { setSavedMovies } = useContext(MovieContext);
  const handleClick = (event) => {
    if (props.movie) { //make click available only on search results page
      setSavedMovies(props.movie);
    }
  };

  return (
    <div className={css(styles.container)} onClick={handleClick}>
      <img src={props.poster} className={css(styles.image)} />
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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

export default MovieItem;
