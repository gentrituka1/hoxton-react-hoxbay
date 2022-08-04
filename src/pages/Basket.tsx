import { useEffect, useState } from "react";

export type basketItem = {
  image: string | undefined;
  productId: number;
  quantity: number;
  id: number;
  title: string;
  price: number;
};

export function Basket() {
  const [basket, setBasket] = useState<basketItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/basket")
      .then((response) => response.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function getTotal() {
    let total = 0;
    for (let item of basket) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  }

  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((product) => (
          <li key={product.id}>
            <div className="basket-container__item">
              <img src={product.image} />
              <h3>{product.title}</h3>
              <div className="quantity">
                <p>Qty:</p>
                <select
                    value={product.quantity}
                  onChange={(event) => {
                    fetch(`http://localhost:4000/basket/${product.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        quantity: Number(event.target.value),
                      }),
                    })
                      .then((response) => response.json())
                      .then((basketItem) => {



                       let basketCopy = structuredClone(basket)

                       let product = basketCopy.find(item => item.id === basketItem.id)

                       product.quantity = basketItem.quantity

                        setBasket(basketCopy)
                      })

                    console.log(event.target.value)
                }}
                >
                {Array(product.quantity + 6).fill(null).map((item, index) => <option>{index}</option>)}
                </select>
              </div>
              <div>
                <p>Item Total</p>
                <p>${product.price * product.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3>Your Total: ${getTotal()}</h3>
    </div>
  );
}
