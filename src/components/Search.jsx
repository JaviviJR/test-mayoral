import InputSearch from "./InputSearch";
import Order from "./Order";

function Search() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 align-items-center">
                <div className="col"> 
                    <InputSearch />
                </div>
                <div className="
                    col
                    d-flex
                    justify-content-md-end
                    justify-content-center"
                >
                    <Order />
                </div>
            </div>
        </div>
    );
}

export default Search;