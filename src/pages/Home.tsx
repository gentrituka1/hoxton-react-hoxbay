import { useEffect, useState } from "react";

type productItem = {
    id: number,
    title: string,
    price: number,
    description: string
    categoryId: number,
    image: string
}


export function Home(){

    const [products, setProducts] = useState<productItem[]>([]);  
    
    useEffect(() => {
        fetch("http://localhost:4000/products")
        .then(response => response.json())
        .then(productsFromServer => setProducts(productsFromServer))
    }, [])

    return (
        <div className="products-container">
            <ul className="products-container__list">
                {products.map(product => (
                    <li className="product-item">
                        <img>{product.image}</img>
                        <h3>{product.title}</h3>
                    </li>
                ) )}
            </ul>
        </div>
    );
}