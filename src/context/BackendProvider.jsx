import { useEffect, useState } from "react";
import { BackendContext } from "./BackendContext";

const URI_PRODUCTS = 'http://localhost:9005/products';

function BackendProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async (queryString) => {
        const uri = queryString ? `${URI_PRODUCTS}?${queryString}` : URI_PRODUCTS;
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

    const searchProduct = (search) => {
        const queryString = `name_like=${search}`;
        getProducts(queryString);
    }

    return (
        <BackendContext.Provider value={{
            products,
            orderProducts,
            searchProduct
        }}>
            { children }
        </BackendContext.Provider>
    );
}

export default BackendProvider;