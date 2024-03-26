import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function InputSearch() {
    const { getProducts } = useContext(ProductContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            getProducts(search);
        }, 500);
        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            name="search"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
        />
    );
}

export default InputSearch;