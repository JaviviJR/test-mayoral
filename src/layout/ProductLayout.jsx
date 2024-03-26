import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function ProductLayout() {
    const { products } = useContext(ProductContext);

    return (
        <div className="container mt-3">
            <div className="row row-cols-2 row-cols-lg-4">
                { products.map( product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
}

export default ProductLayout;