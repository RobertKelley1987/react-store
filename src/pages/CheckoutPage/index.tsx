import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import { CartItem, ShippingMethod } from '../../types';
import './CheckoutPage.css';
import CheckoutHeader from './CheckoutHeader';

type CheckoutPageProps = {
    cart: CartItem[],
    setCheckingOut: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutPage = ({ cart, setCheckingOut }: CheckoutPageProps) => {
    const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({ name: 'standard', cost: 9.99 });

    useEffect(() => {
        setCheckingOut(true);

        return () => setCheckingOut(false);
    }, []);

    return (
        <main className="checkout-page">
            <section className="checkout-page-form-section">
                <CheckoutHeader />
                <CheckoutForm setShippingMethod={setShippingMethod}/>
            </section>

            <section className="checkout-page-cart-section">
                <OrderSummary cart={cart} shippingCost={shippingMethod.cost} />
            </section>
        </main>
    )
}

export default CheckoutPage;