import { useState } from "react";
import { ProductContext } from "./ProductContext";

const URI_PRODUCTS = 'http://localhost:9005/products';

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProducts = async (search) => {
        const uri = search ? `${URI_PRODUCTS}?name_like=${search}` : URI_PRODUCTS;
        const response = await fetch(uri);
        const data = await response.json();
        const products = data.map(product => {
            if (product.discount) {
                product.originalPrice = product.price.toFixed(2);
                product.price = (product.price - (product.price * product.discount / 100)).toFixed(2);
            }
            return product
        });
        setProducts(products);
    }

    const orderProducts = (order, field) => {
        const productSorted = [...products];

        if (order === 'ASC') {
            productSorted.sort((a, b) => a[field] > b[field]);
        } else if (order === 'DESC') {
            productSorted.sort((a, b) => a[field] < b[field]);
        }

        setProducts(productSorted);
    }

    return (
        <ProductContext.Provider value={{
            products,
            orderProducts,
            getProducts
        }}>
            { children }
        </ProductContext.Provider>
    );
}

export default ProductProvider;