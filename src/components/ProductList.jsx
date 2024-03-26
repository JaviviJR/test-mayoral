import { useContext } from "react";
import { BackendContext } from "../context/BackendContext";
import ProductCard from "./ProductCard";

function ProductList() {
    const { products } = useContext(BackendContext);

    return (
        <div className="container mt-3">
            <div className="row row-cols-2 row-cols-lg-4">
                { products.map( product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
}

export default ProductList;