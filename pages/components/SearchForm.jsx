import React, {useEffect, useState}  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function SearchForm(props) {

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    props.setMovieResults([]);
    props.submitGetMovies({searchTitle: userInput, page: 1});
    event.preventDefault();
  };

  return (
    <div className={css(styles.container)}>
      <h2 className={css(styles.header)}>Search For A Movie!</h2>
      <form className={css(styles.form)} onSubmit={handleSubmit}>
        <input type="text" className={css(styles.textBox)} value={userInput} onChange={handleChange} />
        <input type="submit" value="SUBMIT" className={css(styles.button)} />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '20px',
  },
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '360px',
    margin: '10px',
    padding: '20px'
  },
  button: {
    width: '80px',
    height: '40px',
    backgroundColor: '#e0e0e0',
    border: '2px solid black',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'absolute',
    right: '25px',
    top: '25px'
  },
  textBox: {
    height: '50px',
    width: '100%',
    fontSize: '20px',
    border: '2px solid black',
    borderRadius: '8px'
  }
});