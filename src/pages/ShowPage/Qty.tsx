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
            <h3 className="qty-heading">Quantity</h3>
            <div className="qty-buttons">
                <button className="qty-button" onClick={decrement}>
                    <span className="material-symbols-outlined qty-icon">remove</span>
                </button>
                <span className="qty-text">{qty}</span>
                <button className="qty-button" onClick={increment}>
                    <span className="material-symbols-outlined qty-icon">add</span>
                </button>
            </div>
        </div>
    )
}

export default Qty;