import { useEffect, useState } from "react";


export default function ItemDetailcontainer() {
    const [product, setProducts] = useState();

    useEffect(() => {
        fetch("https://fakestorapi.com/products/1")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    })
}