import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface entry {
  attack?: number;
  category?: string;
  common_locations?: Array<string>;
  defense?: number;
  cooking_effect?: string;
  description?: string;
  hearts_recovered?: number;
  drops?: Array<string>;
  id?: number;
  image?: string;
  name?: string;
}

function Entries() {
  const BASE_URL = "https://botw-compendium.herokuapp.com/api/v2/category/";
  const { categoryName }: { categoryName: string } = useParams();
  const [list, setList] = useState([] as entry[]);

  useEffect(() => {
    if (categoryName) {
      const abortController = new AbortController();
      const fetchData = async () => {
        try {
          const url = BASE_URL + categoryName;
          const response = await fetch(url, { signal: abortController.signal });
          const results: { data: Array<any> } = await response.json();
          console.log("results: ", results.data);
          setList(results.data);
          console.log("API Request");
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      };

      fetchData();
      return () => abortController.abort();
    }
  }, [categoryName]);

  if (list) {
    console.log(list);
    return (
      <div>
        <div>
          <h2>{categoryName.toUpperCase()}</h2>
        </div>
        <div>
          {list.map(
            ({
              attack = null,
              common_locations = [],
              defense = null,
              cooking_effect = "",
              description = "",
              hearts_recovered = null,
              drops = [],
              id = null,
              image = "",
              name = "",
            }) => (
              <div key={id}>
                {id}: {name} <br />{" "}
                {cooking_effect ? `Effect: ${cooking_effect}` : ""} <br />{" "}
                {attack !== null ? `Attack: ${attack}` : ""} <br />{" "}
                {defense !== null ? `Defense: ${defense}` : ""} <br />{" "}
                {description} <br />{" "}
                {hearts_recovered !== null
                  ? `Hearts recovered: ${hearts_recovered}`
                  : ""}{" "}
                <br />
                {common_locations.map((location) => (
                  <div key={location}> {location} | </div>
                ))}
                <br />{" "}
                {drops.map((drop) => (
                  <div key={drop}> {drop} | </div>
                ))}{" "}
                <br /> <img src={image} alt={name} /> <br /> <br />
              </div>
            )
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Entries;
