import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <h1>Zelda: Breath of the Wild Compendium</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
      </div>
    </header>
  );
}

export default Header;
