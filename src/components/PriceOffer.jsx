
function PriceOffer({ price, offer }) {
    return (
        <>
            <p className="card-text mb-0 text-decoration-line-through mt-3">{ price } €</p>
            <p className="card-text mt-0" style={{color: 'red'}}>{ offer } €</p>
        </>
    );
}

export default PriceOffer;