import { useEffect, useState } from "react";

export type basketItem = {
    image: string | undefined;
    productId: number,
    quantity:number,
    id: number,
    title: string,
    price: number
}

export function Basket() {

    const [basket, setBasket] = useState<basketItem[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/basket")
        .then(response => response.json())
        .then(basketFromServer => setBasket(basketFromServer))
    }, [])

    function getTotal(){
        let total = 0;
        for(let item of basket){
            total += item.price * item.quantity;
        }
        return total;
    }

  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map(product => (
            <li>
                <div className="basket-container__item">
                    <img src={product.image} />
                    <h3>{product.title}</h3>
                    <div className="quantity">
                        <p>Qty:</p>
                        <button className="btn-size"> {product.quantity} ⮟</button>
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
function setBasket(basketFromServer: any): any {
    throw new Error("Function not implemented.");
}

