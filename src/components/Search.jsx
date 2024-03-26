import { useContext, useEffect, useState } from "react";
import { BackendContext } from "../context/BackendContext";

function Search() {
    const { orderProducts, getProducts } = useContext(BackendContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            getProducts(search);
        }, 500);
        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 align-items-center">
                <div className="col"> 
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                        value={ search }
                        onChange={ (e) => setSearch(e.target.value) }
                    />
                </div>
                <div className="
                    col
                    d-flex
                    justify-content-md-end
                    justify-content-center"
                >
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
                </div>
            </div>
        </div>
    );
}

export default Search;