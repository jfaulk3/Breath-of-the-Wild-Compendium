import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <label htmlFor="name">
          Search by name or Id:{" "}
          <input id="name" name="name" type="text"></input>
        </label>
      </div>
      <div>
        <Link to="/category">Search by category</Link>
      </div>
    </div>
  );
}

export default Home;
