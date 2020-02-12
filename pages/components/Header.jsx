import Link from 'next/link';

const linkStyle = {
 marginRight: 15
};

const Header = () => (
 <div>
  <Link href="/SearchContainer">
   <a style={linkStyle}>Search</a>
  </Link>
  <Link href="/SavedMovies">
   <a style={linkStyle}>Saved Movies</a>
  </Link>
 </div>
);

export default Header;
