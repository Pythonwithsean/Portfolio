import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="Menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
