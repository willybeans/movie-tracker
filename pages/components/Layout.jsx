import Header from './Header';
import { StyleSheet, css } from 'aphrodite/no-important';

const layoutStyle = {
 margin: 20,
 padding: 20,
 borderL: "1px solid #DDD"
};

const Layout = props => (
 <div className={css(styles.app)}>
  <Header />
  {props.children}
 </div>
);

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default Layout;
