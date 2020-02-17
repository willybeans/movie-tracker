import Header from './Header';
import { StyleSheet, css } from 'aphrodite/no-important';

const Layout = props => (
 <div className={css(styles.app)}>
  <Header />
  {props.children}
 </div>
);

const styles = StyleSheet.create({
  app: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Layout;
