import './Qty.css';

type QtyProps = {
    qty: number,
    setQty: React.Dispatch<React.SetStateAction<number>>
}

const Qty = ({ qty, setQty }: QtyProps) => {
    const increment = () => setQty(prev => ++prev);
    const decrement = () => qty > 1 && setQty(prev => --prev); // Do nothing if qty is 1 

    return (
        <div className="qty-wrapper">
            <h3 className="heading-small">Quantity</h3>
            <div className="qty-buttons">
                <button className="button button-black qty-button" onClick={decrement}>-</button>
                <span className="qty-text">{qty}</span>
                <button className="button button-black qty-button" onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Qty;