import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function SearchForm(props) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    props.setMovieResults([]);
    props.setShowLoading(true);
    setTimeout(() => {
      props.setShowLoading(false);
      props.submitGetMovies({ searchTitle: userInput, page: 1 });
    }, 2500);
    event.preventDefault();
  };

  return (
    <div className={css(styles.container)}>
      <h2 className={css(styles.header)}>Search For A Movie And Click To Save!</h2>
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
    alignContent: 'center'
  },
  header: {
    fontSize: '20px',
    maxWidth: '50vw'
  },
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '360px',
    margin: '10px',
    padding: '20px',
    flex: 2,
  },
  button: {
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
    width: 'auto',
    fontSize: '20px',
    border: '2px solid black',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    width: '100%'
  }
});