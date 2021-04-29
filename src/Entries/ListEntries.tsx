import { entry, creatures } from "../interfaces/interface";

function ListEntries({ list }: { list: Array<entry> | creatures }) {
  const array = Array.isArray(list) ? list : [...list.food, ...list.non_food];
  if (array) {
    console.log("THE ARRAY VALUE I NEED: ", array);
    array.map((element, index) => console.log(element));
    return (
      <div>
        {array.map((element) => {
          return (
            <div key={element.name}>
              {/* Name of the entry */}
              <h4>
                {element.name
                  ? element.name.replace(/(^\w{1})|(\s+\w{1})/g, (
                      letter //regex capitalizes first letter of each word.
                    ) => letter.toUpperCase())
                  : "Unknown Name"}
              </h4>
              {/* Image of the entry */}
              {element.image ? (
                <img src={element.image} alt={element.name} />
              ) : (
                "No image available"
              )}
              {/*Attack and Defense of entry */}
              <div>
                {!element.attack ? "" : <p>Attack: {element.attack}</p>}
                {!element.defense ? "" : <p>Defense: {element.defense}</p>}
              </div>
              {/*Cooking Effect of entry */}
              <div>
                {!element.cooking_effect ? (
                  ""
                ) : (
                  <p>Cooking Effects: {element.cooking_effect}</p>
                )}
              </div>
              {/*Hearts Recovered Value of entry */}
              <div>
                {!element.hearts_recovered ? (
                  ""
                ) : (
                  <p>Hearts Recovered: {element.hearts_recovered}</p>
                )}
              </div>
              {/* Drops left by the entry */}
              {element.drops ? (
                <div>
                  Drops:{" "}
                  {element.drops.map((drop) => (
                    <p key={drop}>{drop}</p>
                  ))}
                </div>
              ) : (
                ""
              )}
              {/* Common Locations of the entry */}
              {element.common_locations ? (
                <div>
                  Common Locations:{" "}
                  {element.common_locations.map((location) => (
                    <p key={location}>{location}</p>
                  ))}
                </div>
              ) : (
                ""
              )}
              {/* Description of the entry */}
              <p>
                {element.description
                  ? element.description
                  : "Unknown Description"}
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
