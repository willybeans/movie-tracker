import Link from 'next/link'; 

const linkStyle = {
  marginRight: 15,
  padding: 10,
  border: '1px solid #000',
  width: '400px',
  maxWidth: '100%',
  backgroundColor: '#f1f1f1',
  borderRadius: 10,
  height: '60%'
 };
 
 const headerStyles = {
   width: 'auto',
   boxShadow: '3px 4px 5px #aaaaaa',
   backgroundColor: '#222',
   padding: 15
 };

const Header = () => (
 <div style={headerStyles}>
  <Link href="/SearchContainer">
   <a style={linkStyle}>Search</a>
  </Link>
  <Link href="/SavedMovies">
   <a style={linkStyle}>Saved Movies</a>
  </Link>
 </div>
);

export default Header;
