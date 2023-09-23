import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CheckoutHeader from './CheckoutHeader';
import OrderSummary from './OrderSummary';
import { CartItem } from '../../types';
import './CheckoutPage.css';

type CheckoutPageProps = {
    cart: CartItem[],
    setCheckingOut: React.Dispatch<React.SetStateAction<boolean>>,
    shippingCost: number
}

const CheckoutPage = ({ cart, setCheckingOut, shippingCost }: CheckoutPageProps) => {
    const navigate = useNavigate();

    // When page loads, redirect to home if user has zero cart items
    // Then set checking out state to true
    useEffect(() => {
        if(!cart.length) {
            navigate('/');
        }

        setCheckingOut(true);

        return () => setCheckingOut(false);
    }, [cart.length, navigate, setCheckingOut]);

    return (
        <main className="checkout-page">
            <CheckoutHeader />
            <section className="checkout-page-form-section">
                <Outlet />
            </section>

            <section className="checkout-page-summary-section">
                <OrderSummary cart={cart} shippingCost={shippingCost} />
            </section>
        </main>
    )
}

export default CheckoutPage;