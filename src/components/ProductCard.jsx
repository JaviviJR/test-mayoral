import PriceOffer from "./PriceOffer";
import PriceStandard from "./PriceStandard";

function ProductCard({ product }) {
    const { name, originalPrice, price, discount, img } = product;
    const isOffer = discount ? true : false;

    return (
        <div className="col mt-2">
            <div className="card h-100">
                <img
                    src={img}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{ name }</h5>
                    { isOffer 
                        ? (<PriceOffer price={price} originalPrice={originalPrice} />)
                        : (<PriceStandard price={price} />) }
                    <p className="card-text">mas colores</p>
                    <a href="#" className="btn btn-primary">Añadir</a>
                </div>

            </div>
        </div>
    );
}

export default ProductCard;