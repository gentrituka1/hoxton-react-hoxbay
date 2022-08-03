import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


type productItem = {
    id: number,
    title: string,
    price: number,
    description: string
    categoryId: number,
    image: string
}


export function Electronics () {

    const [electronics, setElectronics] = useState<productItem[]>([]);
    

    useEffect(() => {
        fetch(`http://localhost:4000/products/${}`)
        .then(response => response.json())
        .then(electronicsFromServer => setElectronics(electronicsFromServer))
    })

    return (
        <div className="electronics-container">
            <h2>Electronics</h2>
            <ul className="electronics-container__list">
                <li className="electronics-container__item">

                </li>
            </ul>
        </div>
    );
}