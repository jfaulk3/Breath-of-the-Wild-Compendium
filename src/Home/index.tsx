import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { entry } from "../interfaces/interface";
import ListEntry from "./ListEntry";

function Home() {
  const BASE_URL = "https://botw-compendium.herokuapp.com/api/v2/entry/";
  const [search, setSearch] = useState("");
  const [entry, setEntry] = useState({} as entry);
  const handleSearch = ({ target: { value } }: any) => {
    setSearch(value);
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const {
        data: { data },
      }: { data: any } = await axios.get(BASE_URL + search);

      if (
        data &&
        Object.keys(data).length === 0 &&
        data.constructor === Object
      ) {
        throw Error;
      } else {
        setEntry(data);
      }
    } catch (error) {
      window.alert("That value does not exist in database.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            id="search"
            value={search}
            onChange={handleSearch}
            name="search"
            type="text"
            placeholder={"Search by name or Id:"}
          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <div>
        <Link to="/category">Search by category</Link>
      </div>
      <div>
        <ListEntry entry={entry} />
      </div>
    </div>
  );
}

export default Home;
