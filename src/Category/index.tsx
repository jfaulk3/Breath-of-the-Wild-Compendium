import { Link } from "react-router-dom";

const categories = [
  "creatures",
  "equipment",
  "materials",
  "monsters",
  "treasure",
];

function Category() {
  return (
    <div>
      <div className="categoryTitle">
        <h3>Choose a Category</h3>
      </div>
      <div className="row">
        {categories.map((category) => (
          <Link
            className="home-link link col-12"
            to={`/category/${category}${
              category === "creatures" ? "/food" : ""
            }`}
            key={category}
          >
            {category.replace(/(^\w{1})|(\s+\w{1})/g, (
              letter //regex capitalizes first letter of each word.
            ) => letter.toUpperCase())}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
