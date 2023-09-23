import { Fragment, useState, useEffect } from 'react';
import useScreenIsBig from '../../hooks/useScreenIsBig';
import { formatMoney } from '../../utils';
import { cartTotal } from "../../utils/cart";
import CheckoutItem from './CheckoutItem';
import { CartItem } from "../../types";
import './OrderSummary.css';
import MenuChevron from '../../components/MenuChevron';

type OrderSummaryProps = {
    cart: CartItem[],
    shippingCost: number
}

const OrderSummary = ({ cart, shippingCost }: OrderSummaryProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const { screenIsBig } = useScreenIsBig(1000);
    const cartValue = cartTotal(cart);
    const orderTotal = cartValue + shippingCost;

    useEffect(() => {
        setIsOpen(screenIsBig);
    }, [screenIsBig]);

    const headingTotal = <span className="order-summary-heading-total">{formatMoney(orderTotal)}</span>;

    const renderSummary = () => {
        return (
            <Fragment>
                <div className="order-summary-items">
                    {cart.map(item => <CheckoutItem key={item.product.id} item={item}/>)}
                </div>

                <div className="order-summary-numbers">
                    <span className="order-summary-subtotal">
                        <span>Subtotal</span> 
                        ${formatMoney(cartValue)}
                    </span>
                    <span className="order-summary-shipping-cost">
                        <span>Shipping</span> 
                        ${formatMoney(shippingCost)}
                    </span>
                    <span className="order-summary-total-value">
                        <span className="order-summary-total-label">Total</span> 
                        ${formatMoney(orderTotal)}
                    </span>
                </div>
            </Fragment>
        )
    }
    return (
        <div className="order-summary">
            <div className="order-summary-dropdown-heading" onClick={() => setIsOpen(prev => !prev)}>
                <div className="order-summary-heading-wrapper">
                    <h2 className="order-summary-heading">Order Summary</h2>
                    {!screenIsBig && <MenuChevron flipped={isOpen}/>}
                </div>
                {!screenIsBig && headingTotal}
            </div>
            {isOpen && renderSummary()}
        </div>
    );
}

export default OrderSummary;