import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from '../../assets/imgs/logo.gif';

const styles = StyleSheet.create({
  logo: {
    width: '120px',
  },
});

export default function LoadingLogo() {
  return (
      <img className={css(styles.logo)} src={logo} alt="logo-gif" />
  );
};
