import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                        <Link to={`/products/${product.id}`}>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        </Link>
                    </li>
                ) )}
            </ul>
        </div>
    );
}