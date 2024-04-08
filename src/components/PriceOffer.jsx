
function PriceOffer({ price, originalPrice }) {
    return (
        <>
            <p className="card-text mb-0 text-decoration-line-through mt-3">{ originalPrice } €</p>
            <p className="card-text mt-0" style={{color: 'red'}}>{ price } €</p>
        </>
    );
}

export default PriceOffer;