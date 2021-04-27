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
      <h3>Category route</h3>
      <div>
        {categories.map((category) => (
          <Link to={`/category/${category}`} key={category}>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
