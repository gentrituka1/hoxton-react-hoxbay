import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type categoryItem = {
  id: number;
  name: string;
};

export function Categories() {
  const [categories, setCategories] = useState<categoryItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <div className="categories-container">
      <ul className="categories-container__list">
        {categories.map((category) => (
          <li>
          <Link to={`/categories/${category.id}`}>
            <a className="category-item">{category.name}</a>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
