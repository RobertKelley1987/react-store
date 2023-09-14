import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { CartItem } from '../../types';
import './CheckoutPage.css';

type CheckoutPageProps = {
    cart: CartItem[],
    setCheckingOut: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutPage = ({ cart, setCheckingOut }: CheckoutPageProps) => {
    useEffect(() => {
        setCheckingOut(true);

        return () => setCheckingOut(false);
    }, []);

    return (
        <main className="checkout-page">
            <section className="checkout-page-form-section">
                <header>
                    <h1 className="checkout-page-logo">Infinite Bliss</h1>
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

                <CheckoutForm />
            </section>
            <section className="checkout-page-cart-section">

            </section>
        </main>
    )
}

export default CheckoutPage;