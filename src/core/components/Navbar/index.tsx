import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="main-nav">
    <Link to="/">
      <div className="nav-title-container">
        Bootcamp DevSuperior
      </div>
    </Link>
  </nav>
);

export default Navbar;