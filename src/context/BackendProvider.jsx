import { useEffect, useState } from "react";
import { BackendContext } from "./BackendContext";

const URI_PRODUCTS = 'http://localhost:9005/products';

function BackendProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProducts = async (search) => {
        const uri = search ? `${URI_PRODUCTS}?name_like=${search}` : URI_PRODUCTS;
        const response = await fetch(uri);
        const data = await response.json();
        setProducts(data);
    }

    const orderProducts = (order) => {
        const productSorted = [...products];

        if (order === 'ASC') {
            productSorted.sort((a, b) => (a.offer ? a.offer : a.price) > (b.offer ? b.offer : b.price));
        } else if (order === 'DESC') {
            productSorted.sort((a, b) => (a.offer ? a.offer : a.price) < (b.offer ? b.offer : b.price));
        }

        setProducts(productSorted);
        
    }

    return (
        <BackendContext.Provider value={{
            products,
            orderProducts,
            getProducts
        }}>
            { children }
        </BackendContext.Provider>
    );
}

export default BackendProvider;