import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import LoadingLogo from './components/LoadingLogo';
import Layout from './components/Layout';

function Home() {

  return (
    <Layout>
      <div className={css(styles.app)}>
        <h1 className={css(styles.title)}>Welcome to the App, Nick!</h1>
        <LoadingLogo />
      </div>
    </Layout>
  );
}

export default Home;

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    padding: '20px',
    textAlign: 'center',
    fontSize: '24px'
  }
});
