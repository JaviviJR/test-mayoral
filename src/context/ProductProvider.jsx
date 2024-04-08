import { useState } from "react";
import { ProductContext } from "./ProductContext";

const URI_PRODUCTS = 'http://localhost:9005/products';

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getProducts = async (search) => {
        const uri = search ? `${URI_PRODUCTS}?name_like=${search}` : URI_PRODUCTS;
        const response = await fetch(uri);
        const data = await response.json();
        console.log('data', data);
        const products = data.map(product => {
            if (product.discount) {
                product.originalPrice = product.price;
                product.price = product.price - (product.price * product.discount / 100);
            }
            return product
        });
        console.log('calculated', products);
        setProducts(products);
    }

    const orderProducts = (order, field) => {
        const productSorted = [...products];

        if (order === 'ASC') {
            productSorted.sort((a, b) => a[field] > b[field]);
        } else if (order === 'DESC') {
            productSorted.sort((a, b) => a[field] > b[field]);
        }

        // if (order === 'ASC') {
        //     productSorted.sort((a, b) => (a.offer ? a.offer : a.price) > (b.offer ? b.offer : b.price));
        // } else if (order === 'DESC') {
        //     productSorted.sort((a, b) => (a.offer ? a.offer : a.price) < (b.offer ? b.offer : b.price));
        // }

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