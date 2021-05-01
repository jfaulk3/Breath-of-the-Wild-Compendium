import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="container">
      <div id="app-title" className="row">
        <h1 className="col-12">Zelda: Breath of the Wild Compendium</h1>
      </div>
      <nav className="row">
        <Link className="col-6 home-link link" to="/">
          Home
        </Link>
        <Link className="col-6 home-link link" to="/category">
          Categories
        </Link>
      </nav>
    </header>
  );
}

export default Header;
