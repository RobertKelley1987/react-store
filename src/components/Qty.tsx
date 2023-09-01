import './Qty.css';

type QtyProps = {
    size: "small" | "large",
    qty: number,
    inc: () => void,
    dec: () => void,
    displayHeading?: boolean
}

const STYLES = {
    "small": {
        button: "qty-button qty-button-small",
        text: "qty-text qty-text-small",
        wrapper: "qty-buttons qty-buttons-small"
    },
    "large": {
        button: "qty-button",
        text: "qty-text",
        wrapper: "qty-buttons"
    }
}

const Qty = ({ size, qty, inc, dec, displayHeading }: QtyProps) => {
    return (
        <div className="qty-wrapper">
            {displayHeading && <h3 className="qty-heading">Quantity</h3>}
            <div className={STYLES[size].wrapper}>
                <button className={STYLES[size].button} onClick={dec}>
                    <span className="material-symbols-outlined qty-icon">remove</span>
                </button>
                <span className={STYLES[size].text}>{qty}</span>
                <button className={STYLES[size].button} onClick={inc}>
                    <span className="material-symbols-outlined qty-icon">add</span>
                </button>
            </div>
        </div>
    )
}

export default Qty;