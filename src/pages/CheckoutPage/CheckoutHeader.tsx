import { Link } from 'react-router-dom';

const CheckoutHeader = () => {
    return (
        <header className="checkout-page-header">
            <Link to="/">
                <h1 className="checkout-page-logo">Infinite Bliss</h1>
            </Link>
            <nav className="checkout-page-nav">
                <Link className="checkout-page-link" to='/cart'>Cart</Link>
                <span className="material-symbols-outlined">chevron_right</span>
                <button className="checkout-page-link">Info</button>
                <span className="material-symbols-outlined">chevron_right</span>
                <button className="checkout-page-link">Shipping</button>
                <span className="material-symbols-outlined">chevron_right</span>
                <button className="checkout-page-link">Payment</button>
                <span className="material-symbols-outlined">chevron_right</span>
                <button className="checkout-page-link">Review</button>
            </nav>
        </header>
    )
}

export default CheckoutHeader;