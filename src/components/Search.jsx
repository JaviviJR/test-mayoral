import InputSearch from "./InputSearch";
import Order from "./Order";

function Search({ handleSearch, handleOrder }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 align-items-center">
                <div className="col"> 
                    <InputSearch handleSearch={ handleSearch }/>
                </div>
                <div className="
                    col
                    d-flex
                    justify-content-md-end
                    justify-content-center"
                >
                    <Order handleOrder={ handleOrder }/>
                </div>
            </div>
        </div>
    );
}

export default Search;