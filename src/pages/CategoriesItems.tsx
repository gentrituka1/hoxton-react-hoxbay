import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type ItemINStore = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function CategoriesItems() {
  const [inCategories, setinCategories] = useState<ItemINStore[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `http://localhost:4000/products?_expand=category&categoryId=${params.id}`
    )
      .then((resp) => resp.json())
      .then((itemsInCategoriesFromServer) =>
        setinCategories(itemsInCategoriesFromServer)
      );
  }, []);

  if (inCategories === null) return <div>Loading...</div>;
  return (
    <div className="products-container">
      <ul className="products-container__list">
        {inCategories.map((item) => (
          <li className="product-item">
            <Link to={`/products/${item.id}`}>
              <img src={item.image} />
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
