import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from '../assets/imgs/logo.gif';

function Home() {
  return (
    <div className={css(styles.app)}>
      <img className={css(styles.logo)} src={logo} alt="logo-gif" />
    </div>
  );
}

export default Home

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '120px',
  },
});
