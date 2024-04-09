function Order({ handleOrder }) {
    return (
        <>
            <div 
                className="h1"
                onClick={ () => handleOrder('DESC') }
                style={{ cursor:"pointer" }}
            >
                -
            </div>
            <div 
                className="h1"
                onClick={ () => handleOrder('ASC') }
                style={{ cursor:"pointer" }}
            >
                +
            </div>
        </>
    );
}

export default Order;