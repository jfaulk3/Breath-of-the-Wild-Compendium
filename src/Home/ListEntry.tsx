import { entry } from "../interfaces/interface";
import "./Home.scss";

function ListEntry({ entry }: { entry: entry }) {
  if (
    entry &&
    Object.keys(entry).length === 0 &&
    entry.constructor === Object
  ) {
    return null;
  }
  return (
    <div className="card col-12" key={entry.name}>
      <div className="row">
        <div className="info col-6">
          <div className="row">
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
            {!entry.attack ? "" : <p>Attack: {entry.attack}</p>}
            {!entry.defense ? "" : <p>Defense: {entry.defense}</p>}
          </div>
          {/*Cooking Effect of entry */}
          <div>
            {!entry.cooking_effect ? (
              ""
            ) : (
              <p>Cooking Effects: {entry.cooking_effect}</p>
            )}
          </div>
          {/*Hearts Recovered Value of entry */}
          <div>
            {!entry.hearts_recovered ? (
              ""
            ) : (
              <p>Hearts Recovered: {entry.hearts_recovered}</p>
            )}
          </div>
          {/* Drops left by the entry */}
          {entry.drops ? (
            <div>
              Drops:{" "}
              {entry.drops.map((drop) => (
                <p key={drop}>{drop}</p>
              ))}
            </div>
          ) : (
            ""
          )}
          {/* Common Locations of the entry */}
          {entry.common_locations ? (
            <div>
              Common Locations:{" "}
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
            <img className="images" src={entry.image} alt={entry.name} />
          ) : (
            "No image available"
          )}
        </div>
      </div>

      {/* Description of the entry */}
      <p>{entry.description ? entry.description : "Unknown Description"}</p>
    </div>
  );
}

export default ListEntry;
