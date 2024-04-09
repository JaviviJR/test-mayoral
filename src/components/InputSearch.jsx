import { useEffect, useState } from "react";

function InputSearch({ handleSearch }) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleSearch(search);
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