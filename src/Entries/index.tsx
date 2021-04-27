import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface entry {
  category: string;
  common_locations: Array<string>;
  description: string;
  drops: Array<string>;
  id: number;
  image: string;
  name: string;
}

function Entries() {
  const BASE_URL = "https://botw-compendium.herokuapp.com/api/v2/category/";
  const { categoryName }: { categoryName: string } = useParams();
  const [list, setList] = useState<entry[]>([] as entry[]);

  useEffect(() => {
    if (categoryName) {
      const abortController = new AbortController();
      const fetchData = async () => {
        try {
          const url = BASE_URL + categoryName;
          const response = await fetch(url, { signal: abortController.signal });
          const data: object = await response.json();
          setList(Object.values(data));
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
    return (
      <div>
        <div>
          <h2>{categoryName.toUpperCase()}</h2>
        </div>
        <ul>
          {list.map((element, index) => (
            <li key={index}>
              {element.name}: {index}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Entries;
