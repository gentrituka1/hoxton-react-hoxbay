import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

type productItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function ProductDetails() {
  const [item, setItem] = useState<null | productItem>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((response) => response.json())
      .then((itemFromServer) => setItem(itemFromServer));
  }, []);

  if (item === null) return <div>Loading...</div>;

  if (item.id === undefined) return <Navigate to="/products" />;

  return (
    <div className="product-detail">
      <img src={item.image}></img>
      <div className="product-detail__side">
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <p>${item.price}</p>
        <button onClick={() => {
            
        }}>
          <Link to={`/basket`}>Add to basket</Link>
        </button>
      </div>
    </div>
  );
}
