import React, { useState, useEffect } from "react";
import axios from "axios";
import ListEntries from "./ListEntries";
import { useParams } from "react-router-dom";
import { entry, creatures } from "../interfaces/interface";

function Entries() {
  const BASE_URL = "https://botw-compendium.herokuapp.com/api/v2/category/";
  const { categoryName }: { categoryName: string } = useParams();
  const [list, setList] = useState([] as entry[] | creatures);

  useEffect(() => {
    if (categoryName) {
      const fetchData = async () => {
        try {
          const url = BASE_URL + categoryName;
          const result: { data: any } = await axios.get(url);
          const fetchList: Array<entry> | creatures = result.data.data;
          console.log(fetchList);
          setList(fetchList);
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
    }
  }, [categoryName]);

  if (list) {
    return (
      <div>
        <div>
          <h2>{categoryName.toUpperCase()}</h2>
        </div>
        <div>
          <ListEntries list={list} />{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Entries;
