import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Order() {
    const { orderProducts } = useContext(ProductContext);

    return (
        <>
            <div 
                className="h1"
                onClick={ () => orderProducts('DESC') }
                style={{ cursor:"pointer" }}
            >
                -
            </div>
            <div 
                className="h1"
                onClick={ () => orderProducts('ASC') }
                style={{ cursor:"pointer" }}
            >
                +
            </div>
        </>
    );
}

export default Order;