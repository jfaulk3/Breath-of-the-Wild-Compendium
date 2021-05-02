import { useState, useEffect } from "react";
import { entry, creatures } from "../interfaces/interface";
import { Link, useParams } from "react-router-dom";

function ListEntries({ list }: { list: Array<entry> | creatures }) {
  const [array, setArray] = useState([] as Array<entry>);
  const {
    categoryName,
    foodType,
  }: { categoryName: string; foodType: string } = useParams();

  useEffect(() => {
    if (Array.isArray(list)) {
      setArray(list);
    } else if (foodType === "nonfood") {
      setArray([...list.non_food]);
    } else {
      setArray([...list.food]);
    }
  }, [list, foodType]);

  function handleClick(event: any) {
    if (Array.isArray(list)) return null;

    if (foodType === "food") {
      setArray([...list.food]);
    } else {
      setArray([...list.non_food]);
    }
  }

  if (array) {
    return (
      <div>
        {categoryName === "creatures" ? (
          <div className="row">
            <Link
              className="col-6 home-link link"
              onClick={handleClick}
              to={`/category/${categoryName}/food`}
            >
              Food
            </Link>
            <Link
              className="col-6 home-link link"
              onClick={handleClick}
              to={`/category/${categoryName}/nonfood`}
            >
              Non-Food
            </Link>
          </div>
        ) : (
          ""
        )}
        {array.map((entry) => {
          return (
            <div className="card col-12" key={entry.name}>
              <div className="row">
                <div className="info col-6">
                  <div className="row name">
                    {/* ID of the entry */}
                    <div className="col-3">{entry.id}: </div>
                    {/* Name of the entry */}
                    <h4 className="col-9">
                      {entry.name
                        ? entry.name.replace(/(^\w{1})|(\s+\w{1})/g, (
                            letter //regex capitalizes first letter of each word.
                          ) => letter.toUpperCase())
                        : "Unknown Name"}
                    </h4>
                  </div>
                  {/*Attack and Defense of entry */}
                  <div>
                    {entry.attack && entry.attack.toString() ? (
                      <p>Attack: {entry.attack}</p>
                    ) : (
                      ""
                    )}
                    {entry.defense && entry.defense.toString() ? (
                      <p>Defense: {entry.defense}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  {/*Cooking Effect of entry */}
                  <div>
                    {!entry.cooking_effect ? (
                      ""
                    ) : (
                      <div>
                        <h5>Cooking Effects:</h5> <p>{entry.cooking_effect}</p>
                      </div>
                    )}
                  </div>
                  {/*Hearts Recovered Value of entry */}
                  <div>
                    {entry.hearts_recovered &&
                    entry.hearts_recovered.toString() ? (
                      <p>Hearts Recovered: {entry.hearts_recovered}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* Drops left by the entry */}
                  {entry.drops && entry.drops.length > 0 ? (
                    <div>
                      <h5>Drops:</h5>
                      {entry.drops.map((drop) => (
                        <p key={drop}>{drop}</p>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Common Locations of the entry */}
                  {entry.common_locations &&
                  entry.common_locations.length > 0 ? (
                    <div>
                      <h5> Common Locations:</h5>
                      {entry.common_locations.map((location) => (
                        <p key={location}>{location}</p>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-6">
                  {/* Image of the entry */}
                  {entry.image ? (
                    <img
                      className="images"
                      src={entry.image}
                      alt={entry.name}
                    />
                  ) : (
                    "No image available"
                  )}
                </div>
              </div>

              {/* Description of the entry */}
              <p className="description">
                {entry.description ? entry.description : "Unknown Description"}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}

export default ListEntries;
