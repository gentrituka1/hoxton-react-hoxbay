import { useEffect, useState } from "react";
import {Navigate,  useParams } from "react-router-dom";


type productItem = {
    id: number,
    title: string,
    price: number,
    description: string
    categoryId: number,
    image: string
}

export function ProductDetails() {

    const [item, setItem] = useState<null | productItem>(null);
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
        .then(response => response.json())
        .then(itemFromServer => setItem(itemFromServer))
    }, [])

    if(item.id === null) return (
        <div>Loading...</div>
    )

    if (item.id === undefined) return <Navigate to="/products" />;

    return (
        <div className="product-details">
            <h2>Product Details</h2>
            <p>Product ID: {item.id}</p>
        </div>
    );
}