import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {basketItem} from "./Basket";

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

  const [basket, setBasket] = useState<basketItem[]>([]);

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((response) => response.json())
      .then((itemFromServer) => setItem(itemFromServer));
  }, []);

  if (item === null) return <div className="loading">Loading...</div>;

  if (item.id === undefined) return <Navigate to="/products" />;

  return (
    <div className="product-detail">
      <img src={item.image}></img>
      <div className="product-detail__side">
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <p>${item.price}</p>
        <Link to={`/basket`}>
            <button onClick={() => {
                fetch(`http://localhost:4000/basket`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        productId: item.id,
                        quantity: 1,
                        image: item.image,
                        title: item.title,
                        price: item.price.toFixed(2)
                    })
                })
                .then(response => response.json())
                .then(basketItem => setBasket([...basket, basketItem]))
                .then(() => window.location.reload())
            }}>Add to basket</button>
        </Link>
      </div>
    </div>
  );
}