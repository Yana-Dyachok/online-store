import './_bike-card.scss';

const BikeCard = ({ bike }) => {
    const { productName, productPrice, productImageUrl } = bike;

    const addOrder = (bike) => {
        // const isUnique = !this.state.orders.some(
        //     (order) => order.id === item.id
        // );
        // if (isUnique) {
        //     this.setState((prevState) => ({
        //         orders: [...prevState.orders, item],
        //     }));
        // }
    };
    return (
        <article className="bike-card">
            <img
                className="bike-card__img"
                src={productImageUrl}
                alt={productName}
                width="279.52"
                height="250"
            />
            <p className="bike-card__name">{productName}</p>
            <div className="bike-card__inner">
                <p className="bike-card__price">{productPrice} грн</p>
                <button className="bike-card__cart" type="button" onClick={addOrder}></button>
            </div>
        </article>
    );
};

export default BikeCard;
