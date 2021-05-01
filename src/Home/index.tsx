import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { entry } from "../interfaces/interface";
import ListEntry from "./ListEntry";
import "./Home.scss";

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
    <div className="container">
      <div className="row input">
        <input
          className="col-6"
          id="search"
          value={search}
          onChange={handleSearch}
          name="search"
          type="text"
          placeholder={"Search by name or Id:"}
        />
        <input
          onClick={handleSubmit}
          className="col-6"
          type="submit"
          value="Submit"
        ></input>
      </div>
      <div className="row">
        <Link className="col-12 home-link link" to="/category">
          Search by category
        </Link>
      </div>
      <div className="row">
        <ListEntry entry={entry} />
      </div>
    </div>
  );
}

export default Home;
